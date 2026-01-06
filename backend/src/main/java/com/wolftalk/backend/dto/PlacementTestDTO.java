package com.wolftalk.backend.dto;

import java.time.Instant;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlacementTestDTO {
    private Long id;
    private Long userId;
    private Instant testDate;
    private String targetLanguage;
    private Integer dailyGoalMinutes;
    private List<String> learningGoals;
    private String currentLevel;
    private List<String> learningReasons;
    private String discoverySource;
    private Double pronunciationScore;
    private Double accuracyScore;
    private Double fluencyScore;
    private Double completenessScore;
    private String cefrLevel;
    private Integer overallScore;
    private String grammarLevel;
    private String vocabularyLevel;
    private String strengths;
    private String weaknesses;
    private String recommendations;
    private List<String> audioUrls;
    private String aiAnalysis;
    private Boolean isCompleted;
    private Integer currentStep;
    private String learningPath;
    private Integer totalCorrectAnswers;
    private Integer totalQuestions;
}
