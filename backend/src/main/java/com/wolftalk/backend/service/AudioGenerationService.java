package com.wolftalk.backend.service;

import com.google.cloud.texttospeech.v1.*;
import com.google.protobuf.ByteString;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Base64;

/**
 * Text-to-Speech service using Google Cloud TTS
 * Similar to what Duolingo and ELSA use for pronunciation audio
 */
@Service
public class AudioGenerationService {

    @Value("${google.cloud.tts.enabled:false}")
    private boolean googleTtsEnabled;

    /**
     * Generate audio from text using Google Cloud TTS
     * 
     * @param text The word or phrase to convert to speech
     * @param languageCode Language code (e.g., "en-US", "en-GB")
     * @param voiceName Optional voice name (e.g., "en-US-Neural2-A")
     * @return Base64 encoded MP3 audio data
     */
    public String generateAudio(String text, String languageCode, String voiceName) throws IOException {
        if (!googleTtsEnabled) {
            throw new IllegalStateException("Google Cloud TTS is not enabled. Set google.cloud.tts.enabled=true");
        }

        try (TextToSpeechClient textToSpeechClient = TextToSpeechClient.create()) {
            // Set the text input to be synthesized
            SynthesisInput input = SynthesisInput.newBuilder()
                    .setText(text)
                    .build();

            // Build the voice request
            VoiceSelectionParams.Builder voiceBuilder = VoiceSelectionParams.newBuilder()
                    .setLanguageCode(languageCode);
            
            if (voiceName != null && !voiceName.isEmpty()) {
                voiceBuilder.setName(voiceName);
            } else {
                // Use Neural2 voices for better quality (like Duolingo)
                voiceBuilder.setSsmlGender(SsmlVoiceGender.NEUTRAL);
            }
            
            VoiceSelectionParams voice = voiceBuilder.build();

            // Select the type of audio file
            AudioConfig audioConfig = AudioConfig.newBuilder()
                    .setAudioEncoding(AudioEncoding.MP3)
                    .setSpeakingRate(0.9) // Slightly slower for learning
                    .setPitch(0.0)
                    .build();

            // Perform the text-to-speech request
            SynthesizeSpeechResponse response = textToSpeechClient.synthesizeSpeech(input, voice, audioConfig);

            // Get the audio contents from the response
            ByteString audioContents = response.getAudioContent();

            // Return as Base64 for easy transmission
            return Base64.getEncoder().encodeToString(audioContents.toByteArray());
        }
    }

    /**
     * Generate audio with default US English voice
     */
    public String generateAudio(String text) throws IOException {
        return generateAudio(text, "en-US", "en-US-Neural2-C");
    }

    /**
     * Generate audio with British English accent
     */
    public String generateAudioBritish(String text) throws IOException {
        return generateAudio(text, "en-GB", "en-GB-Neural2-B");
    }

    /**
     * Generate audio with custom speaking rate (for slow/fast pronunciation practice)
     */
    public String generateAudioWithRate(String text, double speakingRate) throws IOException {
        if (!googleTtsEnabled) {
            throw new IllegalStateException("Google Cloud TTS is not enabled");
        }

        try (TextToSpeechClient textToSpeechClient = TextToSpeechClient.create()) {
            SynthesisInput input = SynthesisInput.newBuilder()
                    .setText(text)
                    .build();

            VoiceSelectionParams voice = VoiceSelectionParams.newBuilder()
                    .setLanguageCode("en-US")
                    .setName("en-US-Neural2-C")
                    .build();

            AudioConfig audioConfig = AudioConfig.newBuilder()
                    .setAudioEncoding(AudioEncoding.MP3)
                    .setSpeakingRate(speakingRate) // 0.25 to 4.0
                    .setPitch(0.0)
                    .build();

            SynthesizeSpeechResponse response = textToSpeechClient.synthesizeSpeech(input, voice, audioConfig);
            ByteString audioContents = response.getAudioContent();

            return Base64.getEncoder().encodeToString(audioContents.toByteArray());
        }
    }

    /**
     * Check if Google TTS is available
     */
    public boolean isAvailable() {
        return googleTtsEnabled;
    }
}
