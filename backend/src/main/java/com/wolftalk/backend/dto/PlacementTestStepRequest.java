package com.wolftalk.backend.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlacementTestStepRequest {
    private Long testId;
    private Integer step;
    
    // Step 1: Language Selection
    private String targetLanguage;
    
    // Step 2: Daily Goal
    private Integer dailyGoalMinutes;
    
    // Step 3: Learning Goals
    private List<String> learningGoals;
    
    // Step 4: Current Level
    private String currentLevel;
    
    // Step 5: Learning Reasons
    private List<String> learningReasons;
    
    // Step 6: Discovery Source
    private String discoverySource;
    
    // Quiz Answer
    private String questionId;
    private String answer;
    private Boolean isCorrect;
}
