package com.wolftalk.backend.entity;

import java.time.Instant;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "placement_tests")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlacementTest {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    private Instant testDate = Instant.now();
    
    // Step 1: Language Selection
    private String targetLanguage; // "English", "Chinese", "Japanese", etc.
    
    // Step 2: Daily Goal
    private Integer dailyGoalMinutes; // 5, 10, 15, 20
    
    // Step 3: Learning Goals
    @Column(columnDefinition = "TEXT")
    private String learningGoals; // JSON array: ["confident_communication", "vocabulary", "habit"]
    
    // Step 4: Current Level
    private String currentLevel; // "beginner", "basic", "intermediate", "advanced", "proficient"
    
    // Step 5: Learning Reason
    @Column(columnDefinition = "TEXT")
    private String learningReasons; // JSON array: ["career", "study", "travel", etc.]
    
    // Step 6: Discovery Source
    private String discoverySource; // "google", "tiktok", "youtube", etc.
    
    // Test Results - Pronunciation
    private Double pronunciationScore; // 0-100
    private Double accuracyScore; // 0-100
    private Double fluencyScore; // 0-100
    private Double completenessScore; // 0-100
    
    // Test Results - Speaking Assessment
    private String cefrLevel; // A1, A2, B1, B2, C1, C2
    private Integer overallScore; // 0-100
    private String grammarLevel; // Beginner, Intermediate, Advanced
    private String vocabularyLevel;
    
    // Detailed Feedback
    @Column(columnDefinition = "TEXT")
    private String strengths;
    
    @Column(columnDefinition = "TEXT")
    private String weaknesses;
    
    @Column(columnDefinition = "TEXT")
    private String recommendations;
    
    // Audio Recordings (Cloudinary URLs)
    @Column(columnDefinition = "TEXT")
    private String audioUrls; // JSON array
    
    // AI Analysis Results
    @Column(columnDefinition = "TEXT")
    private String aiAnalysis; // JSON
    
    // Status
    private Boolean isCompleted = false;
    private Integer currentStep = 1; // Track progress
    
    // Recommended Learning Path
    @Column(columnDefinition = "TEXT")
    private String learningPath; // JSON
    
    // Quiz Results (for each step)
    @Column(columnDefinition = "TEXT")
    private String quizResults; // JSON: scores for listening, writing, matching exercises
    
    private Integer totalCorrectAnswers = 0;
    private Integer totalQuestions = 0;
}
