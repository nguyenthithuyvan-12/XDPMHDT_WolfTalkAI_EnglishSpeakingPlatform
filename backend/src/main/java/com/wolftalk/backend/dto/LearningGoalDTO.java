package com.wolftalk.backend.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LearningGoalDTO {
    private Long id;
    private Long userId;
    private String goalType;
    private String goalCategory;
    private String title;
    private String description;
    private Integer targetValue;
    private Integer currentValue;
    private String unit;
    private LocalDate startDate;
    private LocalDate endDate;
    private String status;
    private Integer priority;
    private Boolean isCompleted;
    private Integer progressPercentage;
}
