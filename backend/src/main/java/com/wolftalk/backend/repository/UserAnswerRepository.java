package com.wolftalk.backend.repository;

import com.wolftalk.backend.entity.UserAnswer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserAnswerRepository extends JpaRepository<UserAnswer, Long> {
    List<UserAnswer> findByPlacementTestId(Long testId);
    Long countByPlacementTestIdAndIsCorrect(Long testId, Boolean isCorrect);
}
