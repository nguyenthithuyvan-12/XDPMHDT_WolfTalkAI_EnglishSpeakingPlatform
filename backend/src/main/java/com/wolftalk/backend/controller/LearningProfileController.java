package com.wolftalk.backend.controller;

import com.wolftalk.backend.dto.LearningProfileDTO;
import com.wolftalk.backend.service.LearningProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/learning-profile")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class LearningProfileController {

    private final LearningProfileService learningProfileService;

    @PostMapping
    public ResponseEntity<LearningProfileDTO> createProfile(
            Authentication authentication,
            @RequestBody LearningProfileDTO profileDTO) {
        Long userId = getUserIdFromAuth(authentication);
        LearningProfileDTO created = learningProfileService.createProfile(userId, profileDTO);
        return ResponseEntity.ok(created);
    }

    @GetMapping
    public ResponseEntity<LearningProfileDTO> getProfile(Authentication authentication) {
        Long userId = getUserIdFromAuth(authentication);
        return learningProfileService.getProfileByUserId(userId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/{userId}")
    public ResponseEntity<LearningProfileDTO> getProfileByUserId(@PathVariable Long userId) {
        return learningProfileService.getProfileByUserId(userId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping
    public ResponseEntity<LearningProfileDTO> updateProfile(
            Authentication authentication,
            @RequestBody LearningProfileDTO profileDTO) {
        Long userId = getUserIdFromAuth(authentication);
        LearningProfileDTO updated = learningProfileService.updateProfile(userId, profileDTO);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteProfile(Authentication authentication) {
        Long userId = getUserIdFromAuth(authentication);
        learningProfileService.deleteProfile(userId);
        return ResponseEntity.noContent().build();
    }

    private Long getUserIdFromAuth(Authentication authentication) {
        // Extract user ID from authentication
        return Long.parseLong(authentication.getName());
    }
}
