package com.wolftalk.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "alphabet_questions")
@Data
public class AlphabetQuestion {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String questionType; // "listening", "comparison", "speaking"
    
    @Column(nullable = false)
    private String targetWord;
    
    @Column(name = "target_ipa")
    private String targetIpa;
    
    @Column(name = "audio_url")
    private String audioUrl;
    
    @Column(name = "option_a")
    private String optionA;
    
    @Column(name = "option_b")
    private String optionB;
    
    @Column(name = "option_c")
    private String optionC;
    
    @Column(name = "option_d")
    private String optionD;
    
    @Column(name = "correct_answer", nullable = false)
    private String correctAnswer;
    
    @Column(name = "comparison_word")
    private String comparisonWord;
    
    @Column(name = "comparison_ipa")
    private String comparisonIpa;
    
    @Column(name = "comparison_audio_url")
    private String comparisonAudioUrl;
    
    @Column(name = "difficulty_level")
    private Integer difficultyLevel; // 1-5
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }
    
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
