package com.wolftalk.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LearningProfileDTO {
    private Long id;
    private Long userId;
    private String currentLevel;
    private String targetLevel;
    private Integer studyHoursPerWeek;
    private String preferredLearningStyle;
    private String learningPurpose;
    private Integer speakingConfidence;
    private Double pronunciationScore;
    private Double grammarScore;
    private Double vocabularyScore;
    private Double fluencyScore;
    private String bio;
    private String avatarUrl;
}
