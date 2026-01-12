package com.wolftalk.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuestionOptionDTO {
    private Long id;
    private String optionText;
    private String imageUrl;
    private Integer displayOrder;
}
