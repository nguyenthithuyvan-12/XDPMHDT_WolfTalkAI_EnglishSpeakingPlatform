package com.wolftalk.backend.controller;

import java.security.Principal;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wolftalk.backend.dto.PlacementTestDTO;
import com.wolftalk.backend.dto.PlacementTestStepRequest;
import com.wolftalk.backend.service.PlacementTestService;

@RestController
@RequestMapping("/api/placement-test")
public class PlacementTestController {
    
    @Autowired
    private PlacementTestService placementTestService;
    
    @PostMapping("/start")
    public ResponseEntity<?> startTest(Principal principal) {
        if (principal == null) {
            return ResponseEntity.status(401).body(Map.of("error", "Unauthenticated"));
        }
        
        try {
            PlacementTestDTO test = placementTestService.startTest(principal.getName());
            return ResponseEntity.ok(test);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }
    
    @PutMapping("/update")
    public ResponseEntity<?> updateTestStep(@RequestBody PlacementTestStepRequest request, Principal principal) {
        if (principal == null) {
            return ResponseEntity.status(401).body(Map.of("error", "Unauthenticated"));
        }
        
        try {
            PlacementTestDTO test = placementTestService.updateTestStep(principal.getName(), request);
            return ResponseEntity.ok(test);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }
    
    @GetMapping("/current")
    public ResponseEntity<?> getCurrentTest(Principal principal) {
        if (principal == null) {
            return ResponseEntity.status(401).body(Map.of("error", "Unauthenticated"));
        }
        
        try {
            PlacementTestDTO test = placementTestService.getCurrentTest(principal.getName());
            return ResponseEntity.ok(test);
        } catch (Exception e) {
            return ResponseEntity.status(404).body(Map.of("error", "No active test found"));
        }
    }
    
    @GetMapping("/has-completed")
    public ResponseEntity<?> hasCompletedTest(Principal principal) {
        if (principal == null) {
            return ResponseEntity.status(401).body(Map.of("error", "Unauthenticated"));
        }
        
        try {
            boolean hasCompleted = placementTestService.hasCompletedTest(principal.getName());
            return ResponseEntity.ok(Map.of("hasCompleted", hasCompleted));
        } catch (Exception e) {
            return ResponseEntity.ok(Map.of("hasCompleted", false));
        }
    }
}
