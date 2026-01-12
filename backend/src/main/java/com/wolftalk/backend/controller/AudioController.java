package com.wolftalk.backend.controller;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wolftalk.backend.service.AudioGenerationService;

/**
 * Audio generation endpoint for Text-to-Speech
 * Used by alphabet quiz to generate pronunciation audio on-demand
 */
@RestController
@RequestMapping("/api/audio")
public class AudioController {

    @Autowired
    private AudioGenerationService audioGenerationService;

    /**
     * Generate audio from text
     * GET /api/audio/generate?text=hello&lang=en-US
     */
    @GetMapping("/generate")
    public ResponseEntity<?> generateAudio(
            @RequestParam String text,
            @RequestParam(defaultValue = "en-US") String lang,
            @RequestParam(required = false) String voice,
            @RequestParam(defaultValue = "false") boolean returnBase64) {
        
        try {
            // Check if service is available
            if (!audioGenerationService.isAvailable()) {
                Map<String, Object> error = new HashMap<>();
                error.put("error", "TTS_NOT_CONFIGURED");
                error.put("message", "Text-to-Speech service is not configured. Using browser fallback.");
                error.put("text", text);
                error.put("useBrowserTTS", true);
                return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(error);
            }
            
            String base64Audio = audioGenerationService.generateAudio(text, lang, voice);
            
            if (returnBase64) {
                // Return as JSON with base64 string
                Map<String, Object> response = new HashMap<>();
                response.put("text", text);
                response.put("language", lang);
                response.put("audioBase64", base64Audio);
                response.put("format", "mp3");
                return ResponseEntity.ok(response);
            } else {
                // Return as binary audio file
                byte[] audioBytes = Base64.getDecoder().decode(base64Audio);
                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.parseMediaType("audio/mpeg"));
                headers.setContentLength(audioBytes.length);
                headers.set("Cache-Control", "public, max-age=86400"); // Cache for 1 day
                return new ResponseEntity<>(audioBytes, headers, HttpStatus.OK);
            }
        } catch (IllegalStateException e) {
            // TTS not enabled - return info to use browser TTS
            Map<String, Object> error = new HashMap<>();
            error.put("error", "TTS_NOT_CONFIGURED");
            error.put("message", e.getMessage());
            error.put("text", text);
            error.put("useBrowserTTS", true);
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(error);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", e.getClass().getSimpleName());
            error.put("message", "Failed to generate audio: " + e.getMessage());
            error.put("text", text);
            error.put("useBrowserTTS", true);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }

    /**
     * Generate audio with custom speaking rate
     * GET /api/audio/generate-with-rate?text=hello&rate=0.75
     */
    @GetMapping("/generate-with-rate")
    public ResponseEntity<?> generateAudioWithRate(
            @RequestParam String text,
            @RequestParam(defaultValue = "0.9") double rate) {
        
        try {
            String base64Audio = audioGenerationService.generateAudioWithRate(text, rate);
            byte[] audioBytes = Base64.getDecoder().decode(base64Audio);
            
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.parseMediaType("audio/mpeg"));
            headers.setContentLength(audioBytes.length);
            return new ResponseEntity<>(audioBytes, headers, HttpStatus.OK);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }

    /**
     * Generate British English pronunciation
     * GET /api/audio/generate-british?text=hello
     */
    @GetMapping("/generate-british")
    public ResponseEntity<?> generateBritishAudio(@RequestParam String text) {
        try {
            String base64Audio = audioGenerationService.generateAudioBritish(text);
            byte[] audioBytes = Base64.getDecoder().decode(base64Audio);
            
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.parseMediaType("audio/mpeg"));
            return new ResponseEntity<>(audioBytes, headers, HttpStatus.OK);
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(error);
        }
    }

    /**
     * Check if TTS service is available
     * GET /api/audio/status
     */
    @GetMapping("/status")
    public ResponseEntity<Map<String, Object>> checkStatus() {
        Map<String, Object> status = new HashMap<>();
        status.put("available", audioGenerationService.isAvailable());
        status.put("service", "Google Cloud Text-to-Speech");
        return ResponseEntity.ok(status);
    }
}
