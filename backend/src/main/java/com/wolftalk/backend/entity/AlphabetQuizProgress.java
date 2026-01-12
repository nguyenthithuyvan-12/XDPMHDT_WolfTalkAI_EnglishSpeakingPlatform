package com.wolftalk.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "alphabet_quiz_progress")
@Data
public class AlphabetQuizProgress {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id", nullable = false)
    private AlphabetQuestion question;
    
    @Column(name = "user_answer")
    private String userAnswer;
    
    @Column(name = "is_correct")
    private Boolean isCorrect;
    
    @Column(name = "pronunciation_score")
    private Double pronunciationScore; // 0-100 for speaking questions
    
    @Column(name = "attempt_count")
    private Integer attemptCount;
    
    @Column(name = "time_spent_seconds")
    private Integer timeSpentSeconds;
    
    @Column(name = "completed_at")
    private LocalDateTime completedAt;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        completedAt = LocalDateTime.now();
        if (attemptCount == null) {
            attemptCount = 1;
        }
    }
}
