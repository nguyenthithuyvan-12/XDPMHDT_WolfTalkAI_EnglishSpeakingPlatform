package com.wolftalk.backend.repository;

import com.wolftalk.backend.entity.SpeakingSession;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpeakingSessionRepository
        extends JpaRepository<SpeakingSession, Long> {
}
