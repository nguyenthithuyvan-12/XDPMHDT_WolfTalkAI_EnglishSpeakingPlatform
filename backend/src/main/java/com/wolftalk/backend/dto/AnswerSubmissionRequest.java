package com.wolftalk.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AnswerSubmissionRequest {
    private Long testId;
    private Long questionId;
    private String userAnswer;
    private Integer timeSpentSeconds;
}
