package com.wolftalk.backend.controller;

import com.wolftalk.backend.dto.UserPreferenceDTO;
import com.wolftalk.backend.service.UserPreferenceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user-preferences")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class UserPreferenceController {

    private final UserPreferenceService userPreferenceService;

    @PostMapping
    public ResponseEntity<UserPreferenceDTO> createPreference(
            Authentication authentication,
            @RequestBody UserPreferenceDTO preferenceDTO) {
        Long userId = getUserIdFromAuth(authentication);
        UserPreferenceDTO created = userPreferenceService.createPreference(userId, preferenceDTO);
        return ResponseEntity.ok(created);
    }

    @GetMapping
    public ResponseEntity<UserPreferenceDTO> getPreference(Authentication authentication) {
        Long userId = getUserIdFromAuth(authentication);
        return userPreferenceService.getPreferenceByUserId(userId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserPreferenceDTO> getPreferenceByUserId(@PathVariable Long userId) {
        return userPreferenceService.getPreferenceByUserId(userId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping
    public ResponseEntity<UserPreferenceDTO> updatePreference(
            Authentication authentication,
            @RequestBody UserPreferenceDTO preferenceDTO) {
        Long userId = getUserIdFromAuth(authentication);
        UserPreferenceDTO updated = userPreferenceService.updatePreference(userId, preferenceDTO);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping
    public ResponseEntity<Void> deletePreference(Authentication authentication) {
        Long userId = getUserIdFromAuth(authentication);
        userPreferenceService.deletePreference(userId);
        return ResponseEntity.noContent().build();
    }

    private Long getUserIdFromAuth(Authentication authentication) {
        return Long.parseLong(authentication.getName());
    }
}
