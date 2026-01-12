package com.wolftalk.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "placement_questions")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlacementQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String level; // beginner, elementary, intermediate, advanced, expert

    @Column(nullable = false)
    private String type; // LISTEN_TYPE, TRANSLATE, MULTIPLE_CHOICE, IMAGE_MATCH, WORD_ORDER

    @Column(nullable = false, length = 500)
    private String questionText;

    @Column(length = 1000)
    private String audioUrl; // For listening questions

    @Column(length = 1000)
    private String imageUrl; // For image-based questions

    @Column(nullable = false, length = 200)
    private String correctAnswer;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<QuestionOption> options = new ArrayList<>();

    @Column(nullable = false)
    private Integer difficulty; // 1-5

    private Instant createdAt = Instant.now();
}
