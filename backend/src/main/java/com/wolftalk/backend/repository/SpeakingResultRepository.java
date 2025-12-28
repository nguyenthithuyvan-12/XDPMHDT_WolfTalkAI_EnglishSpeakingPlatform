package com.wolftalk.backend.repository;

import com.wolftalk.backend.entity.SpeakingResult;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpeakingResultRepository
        extends JpaRepository<SpeakingResult, Long> {
}
