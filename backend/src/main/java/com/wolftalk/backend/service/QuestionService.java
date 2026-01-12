package com.wolftalk.backend.service;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wolftalk.backend.dto.AnswerSubmissionRequest;
import com.wolftalk.backend.dto.PlacementQuestionDTO;
import com.wolftalk.backend.dto.QuestionOptionDTO;
import com.wolftalk.backend.entity.PlacementQuestion;
import com.wolftalk.backend.entity.PlacementTest;
import com.wolftalk.backend.entity.UserAnswer;
import com.wolftalk.backend.repository.PlacementQuestionRepository;
import com.wolftalk.backend.repository.PlacementTestRepository;
import com.wolftalk.backend.repository.UserAnswerRepository;

@Service
public class QuestionService {

    @Autowired
    private PlacementQuestionRepository questionRepository;

    @Autowired
    private PlacementTestRepository testRepository;

    @Autowired
    private UserAnswerRepository answerRepository;

    /**
     * Get questions for placement test based on user's selected level
     * @param testId Placement test ID
     * @return List of 10-15 questions
     */
    public List<PlacementQuestionDTO> getQuestionsForTest(Long testId) {
        PlacementTest test = testRepository.findById(testId)
                .orElseThrow(() -> new IllegalArgumentException("Test not found"));

        String level = mapCurrentLevelToQuestionLevel(test.getCurrentLevel());
        
        List<PlacementQuestion> allQuestions = questionRepository.findByLevel(level);
        
        // Shuffle and take 10-15 questions
        Collections.shuffle(allQuestions);
        int questionCount = Math.min(allQuestions.size(), 15);
        List<PlacementQuestion> selectedQuestions = allQuestions.subList(0, Math.min(questionCount, allQuestions.size()));

        return selectedQuestions.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Submit answer for a question
     */
    @Transactional
    public Map<String, Object> submitAnswer(AnswerSubmissionRequest request) {
        PlacementTest test = testRepository.findById(request.getTestId())
                .orElseThrow(() -> new IllegalArgumentException("Test not found"));

        PlacementQuestion question = questionRepository.findById(request.getQuestionId())
                .orElseThrow(() -> new IllegalArgumentException("Question not found"));

        // Check if answer is correct
        boolean isCorrect = checkAnswer(question, request.getUserAnswer());

        // Save user answer
        UserAnswer answer = new UserAnswer();
        answer.setPlacementTest(test);
        answer.setQuestion(question);
        answer.setUserAnswer(request.getUserAnswer());
        answer.setIsCorrect(isCorrect);
        answer.setTimeSpentSeconds(request.getTimeSpentSeconds());
        answerRepository.save(answer);

        // Update current question index for resume functionality
        test.setCurrentQuestionIndex(test.getCurrentQuestionIndex() + 1);
        testRepository.save(test);

        // Return result with correct answer if wrong
        Map<String, Object> result = new HashMap<>();
        result.put("isCorrect", isCorrect);
        if (!isCorrect) {
            result.put("correctAnswer", question.getCorrectAnswer());
        }
        return result;
    }

    /**
     * Calculate final score and level
     */
    public String calculateFinalLevel(Long testId) {
        Long correctAnswers = answerRepository.countByPlacementTestIdAndIsCorrect(testId, true);
        Long totalAnswers = (long) answerRepository.findByPlacementTestId(testId).size();

        if (totalAnswers == 0) return "beginner";

        double accuracy = (double) correctAnswers / totalAnswers;

        if (accuracy >= 0.9) return "expert";
        if (accuracy >= 0.75) return "advanced";
        if (accuracy >= 0.6) return "intermediate";
        if (accuracy >= 0.4) return "elementary";
        return "beginner";
    }

    private String mapCurrentLevelToQuestionLevel(String currentLevel) {
        if (currentLevel == null) return "beginner";
        
        // Map from user selection to question levels
        // "new", "basic", "intermediate", "advanced", "fluent"
        switch (currentLevel.toLowerCase()) {
            case "new":
                return "beginner";
            case "basic":
                return "elementary";
            case "intermediate":
                return "intermediate";
            case "advanced":
                return "advanced";
            case "fluent":
                return "expert";
            default:
                return "beginner";
        }
    }

    private boolean checkAnswer(PlacementQuestion question, String userAnswer) {
        String correctAnswer = question.getCorrectAnswer().trim().toLowerCase();
        String userAnswerLower = userAnswer.trim().toLowerCase();
        
        return correctAnswer.equals(userAnswerLower);
    }

    private PlacementQuestionDTO convertToDTO(PlacementQuestion question) {
        PlacementQuestionDTO dto = new PlacementQuestionDTO();
        dto.setId(question.getId());
        dto.setType(question.getType());
        dto.setQuestionText(question.getQuestionText());
        dto.setAudioUrl(question.getAudioUrl());
        dto.setImageUrl(question.getImageUrl());
        dto.setDifficulty(question.getDifficulty());

        List<QuestionOptionDTO> optionDTOs = question.getOptions().stream()
                .map(option -> new QuestionOptionDTO(
                        option.getId(),
                        option.getOptionText(),
                        option.getImageUrl(),
                        option.getDisplayOrder()
                ))
                .collect(Collectors.toList());

        dto.setOptions(optionDTOs);
        return dto;
    }

    /**
     * Get progress for a test - returns current question index
     */
    public Map<String, Object> getTestProgress(Long testId) {
        PlacementTest test = testRepository.findById(testId)
                .orElseThrow(() -> new IllegalArgumentException("Test not found"));
        
        Map<String, Object> progress = new HashMap<>();
        progress.put("currentQuestionIndex", test.getCurrentQuestionIndex());
        progress.put("totalAnswered", answerRepository.findByPlacementTestId(testId).size());
        
        return progress;
    }
}
