package com.wolftalk.backend.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserPreferenceDTO {
    private Long id;
    private Long userId;
    private List<String> interestedTopics;
    private List<String> preferredScenarios;
    private String preferredAccent;
    private String difficultyPreference;
    private Integer dailyPracticeTime;
    private Boolean reminderEnabled;
    private String reminderTime;
    private Boolean enableAiFeedback;
    private Boolean enablePronunciationCheck;
    private Boolean enableGrammarCheck;
    private String feedbackDetailLevel;
    private Boolean practiceWithMentor;
    private Boolean showSubtitles;
    private Boolean backgroundMusicEnabled;
}
