package com.wolftalk.backend.repository;

import com.wolftalk.backend.entity.LearningProgress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LearningProgressRepository
        extends JpaRepository<LearningProgress, Long> {
}
