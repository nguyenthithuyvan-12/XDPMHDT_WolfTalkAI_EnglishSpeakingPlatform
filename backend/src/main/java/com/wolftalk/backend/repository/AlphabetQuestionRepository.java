package com.wolftalk.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.wolftalk.backend.entity.AlphabetQuestion;

@Repository
public interface AlphabetQuestionRepository extends JpaRepository<AlphabetQuestion, Long> {
    
    List<AlphabetQuestion> findByQuestionType(String questionType);
    
    List<AlphabetQuestion> findByDifficultyLevel(Integer level);
    
    @Query(value = "SELECT * FROM alphabet_questions ORDER BY RANDOM() LIMIT :limit", nativeQuery = true)
    List<AlphabetQuestion> findRandomQuestions(int limit);
    
    @Query(value = "SELECT * FROM alphabet_questions WHERE question_type = :type ORDER BY RANDOM() LIMIT :limit", nativeQuery = true)
    List<AlphabetQuestion> findRandomQuestionsByType(String type, int limit);
}
