package com.wolftalk.backend.dto;

import lombok.Data;

@Data
public class AlphabetProgressRequest {
    private Long questionId;
    private String userAnswer;
    private Boolean isCorrect;
    private Double pronunciationScore;
    private Integer timeSpentSeconds;
}
