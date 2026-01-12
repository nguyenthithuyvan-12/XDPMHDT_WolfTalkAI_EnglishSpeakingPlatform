package com.wolftalk.backend.service;

import java.util.Base64;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 * Alternative TTS using Azure Speech Services
 * Cheaper than Google: $1/1M characters vs $4/1M
 * Also used by Memrise and other learning apps
 */
@Service
public class AzureTTSService {

    @Value("${azure.speech.key:}")
    private String azureKey;

    @Value("${azure.speech.region:eastus}")
    private String azureRegion;

    @Value("${azure.speech.enabled:false}")
    private boolean azureEnabled;

    private final RestTemplate restTemplate = new RestTemplate();

    /**
     * Generate audio using Azure Speech Services
     * Cheaper alternative to Google TTS
     */
    public byte[] generateAudio(String text, String voice) {
        if (!azureEnabled || azureKey.isEmpty()) {
            throw new IllegalStateException("Azure Speech is not configured");
        }

        String url = String.format(
            "https://%s.tts.speech.microsoft.com/cognitiveservices/v1",
            azureRegion
        );

        // Build SSML (Speech Synthesis Markup Language)
        String ssml = String.format(
            "<speak version='1.0' xml:lang='en-US'>" +
            "<voice name='%s'>%s</voice>" +
            "</speak>",
            voice != null ? voice : "en-US-JennyNeural",
            text
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_XML);
        headers.set("Ocp-Apim-Subscription-Key", azureKey);
        headers.set("X-Microsoft-OutputFormat", "audio-16khz-32kbitrate-mono-mp3");
        headers.set("User-Agent", "WolfTalk");

        HttpEntity<String> entity = new HttpEntity<>(ssml, headers);

        try {
            ResponseEntity<byte[]> response = restTemplate.exchange(
                url,
                HttpMethod.POST,
                entity,
                byte[].class
            );
            return response.getBody();
        } catch (Exception e) {
            throw new RuntimeException("Failed to generate audio: " + e.getMessage(), e);
        }
    }

    public String generateAudioBase64(String text) {
        byte[] audio = generateAudio(text, null);
        return Base64.getEncoder().encodeToString(audio);
    }

    public boolean isAvailable() {
        return azureEnabled && !azureKey.isEmpty();
    }
}
