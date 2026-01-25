package com.wolftalk.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wolftalk.backend.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    java.util.Optional<User> findByEmailIgnoreCase(String email);

    boolean existsByEmailIgnoreCase(String email);

    // Alias methods to fix compilation errors in services
    default java.util.Optional<User> findByEmail(String email) {
        return findByEmailIgnoreCase(email);
    }

    default boolean existsByEmail(String email) {
        return existsByEmailIgnoreCase(email);
    }
}
