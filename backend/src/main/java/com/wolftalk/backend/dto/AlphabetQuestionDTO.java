package com.wolftalk.backend.dto;

import lombok.Data;

@Data
public class AlphabetQuestionDTO {
    private Long id;
    private String questionType;
    private String targetWord;
    private String targetIpa;
    private String audioUrl;
    private String optionA;
    private String optionB;
    private String optionC;
    private String optionD;
    private String correctAnswer;
    private String comparisonWord;
    private String comparisonIpa;
    private String comparisonAudioUrl;
    private Integer difficultyLevel;
}
