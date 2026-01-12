package com.wolftalk.backend.repository;

import com.wolftalk.backend.entity.AlphabetQuizProgress;
import com.wolftalk.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AlphabetQuizProgressRepository extends JpaRepository<AlphabetQuizProgress, Long> {
    
    List<AlphabetQuizProgress> findByUser(User user);
    
    List<AlphabetQuizProgress> findByUserOrderByCompletedAtDesc(User user);
    
    @Query("SELECT p FROM AlphabetQuizProgress p WHERE p.user = :user AND p.question.id = :questionId")
    Optional<AlphabetQuizProgress> findByUserAndQuestionId(User user, Long questionId);
    
    @Query("SELECT COUNT(p) FROM AlphabetQuizProgress p WHERE p.user = :user AND p.isCorrect = true")
    Long countCorrectAnswersByUser(User user);
    
    @Query("SELECT AVG(p.pronunciationScore) FROM AlphabetQuizProgress p WHERE p.user = :user AND p.pronunciationScore IS NOT NULL")
    Double getAveragePronunciationScore(User user);
}
