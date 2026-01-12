package com.wolftalk.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlacementQuestionDTO {
    private Long id;
    private String type;
    private String questionText;
    private String audioUrl;
    private String imageUrl;
    private List<QuestionOptionDTO> options;
    private Integer difficulty;
}
