package com.wolftalk.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wolftalk.backend.entity.PlacementTest;
import com.wolftalk.backend.entity.User;

@Repository
public interface PlacementTestRepository extends JpaRepository<PlacementTest, Long> {
    
    Optional<PlacementTest> findByUserAndIsCompletedFalse(User user);
    
    List<PlacementTest> findByUser(User user);
    
    Optional<PlacementTest> findTopByUserOrderByTestDateDesc(User user);
    
    boolean existsByUserAndIsCompletedTrue(User user);
}
