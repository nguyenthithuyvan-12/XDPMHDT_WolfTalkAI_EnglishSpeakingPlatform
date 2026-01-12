package com.wolftalk.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Entity
@Table(name = "user_answers")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserAnswer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "placement_test_id", nullable = false)
    private PlacementTest placementTest;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id", nullable = false)
    private PlacementQuestion question;

    @Column(nullable = false, length = 500)
    private String userAnswer;

    @Column(nullable = false)
    private Boolean isCorrect = false;

    @Column(nullable = false)
    private Integer timeSpentSeconds = 0;

    private Instant answeredAt = Instant.now();
}
