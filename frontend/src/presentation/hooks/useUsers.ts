import { useState, useEffect } from 'react';
import { GetUsersUseCase } from '../../application/use-cases/admin/user/GetUsersUseCase';
import { ActivateUserUseCase } from '../../application/use-cases/admin/user/ActivateUserUseCase';
import { DeactivateUserUseCase } from '../../application/use-cases/admin/user/DeactivateUserUseCase';
import { UserRepository } from '../../infrastructure/repositories/UserRepository';
import { httpClient } from '../../infrastructure/http/AxiosHttpClient';
import { UserDTO } from '../../application/dto/UserDTO';

const userRepository = new UserRepository(httpClient);
const getUsersUseCase = new GetUsersUseCase(userRepository);
const activateUserUseCase = new ActivateUserUseCase(userRepository);
const deactivateUserUseCase = new DeactivateUserUseCase(userRepository);

export const useUsers = () => {
  const [users, setUsers] = useState<UserDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });
  const [searchQuery, setSearchQuery] = useState('');

  const fetchUsers = async (page: number = 1, search: string = '') => {
    try {
      setLoading(true);
      setError(null);

      const response = await getUsersUseCase.execute({
        page,
        limit: pagination.limit,
        search,
      });

      setUsers(response.items);
      setPagination({
        page: response.page,
        limit: response.limit,
        total: response.total,
        totalPages: response.totalPages,
      });
    } catch (err: any) {
      setError(err.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const activateUser = async (userId: string) => {
    try {
      await activateUserUseCase.execute(userId);
      await fetchUsers(pagination.page, searchQuery);
    } catch (err: any) {
      throw new Error(err.message || 'Failed to activate user');
    }
  };

  const deactivateUser = async (userId: string) => {
    try {
      await deactivateUserUseCase.execute(userId);
      await fetchUsers(pagination.page, searchQuery);
    } catch (err: any) {
      throw new Error(err.message || 'Failed to deactivate user');
    }
  };

  useEffect(() => {
    fetchUsers(1, searchQuery);
  }, [searchQuery]);

  return {
    users,
    loading,
    error,
    pagination,
    searchQuery,
    setSearchQuery,
    fetchUsers,
    activateUser,
    deactivateUser,
  };
};
