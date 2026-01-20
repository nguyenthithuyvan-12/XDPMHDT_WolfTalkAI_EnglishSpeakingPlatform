package com.wolftalk.backend.controller;

import com.wolftalk.backend.dto.SubscriptionDTO;
import com.wolftalk.backend.dto.CreateSubscriptionRequest;
import com.wolftalk.backend.entity.UserSubscription;
import com.wolftalk.backend.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subscriptions")
@CrossOrigin(origins = "*", maxAge = 3600)
public class SubscriptionController {

    @Autowired
    private SubscriptionService subscriptionService;

    /**
     * Lấy tất cả subscription của user
     * GET /api/subscriptions/user/{userId}
     */
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<SubscriptionDTO>> getUserSubscriptions(@PathVariable Long userId) {
        List<SubscriptionDTO> subscriptions = subscriptionService.getUserSubscriptions(userId);
        return ResponseEntity.ok(subscriptions);
    }

    /**
     * Lấy active subscription của user
     * GET /api/subscriptions/user/{userId}/active
     */
    @GetMapping("/user/{userId}/active")
    public ResponseEntity<SubscriptionDTO> getActiveSubscription(@PathVariable Long userId) {
        SubscriptionDTO subscription = subscriptionService.getActiveSubscription(userId);
        if (subscription != null) {
            return ResponseEntity.ok(subscription);
        }
        return ResponseEntity.notFound().build();
    }

    /**
     * Tạo subscription mới (Mua gói)
     * POST /api/subscriptions
     */
    @PostMapping
    public ResponseEntity<SubscriptionDTO> createSubscription(@RequestBody CreateSubscriptionRequest request) {
        SubscriptionDTO subscription = subscriptionService.createSubscription(request);
        if (subscription != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(subscription);
        }
        return ResponseEntity.badRequest().build();
    }

    /**
     * Cập nhật subscription status
     * PATCH /api/subscriptions/{subscriptionId}/status
     */
    @PatchMapping("/{subscriptionId}/status")
    public ResponseEntity<SubscriptionDTO> updateSubscriptionStatus(
            @PathVariable Long subscriptionId,
            @RequestParam UserSubscription.SubscriptionStatus status) {
        SubscriptionDTO subscription = subscriptionService.updateSubscriptionStatus(subscriptionId, status);
        if (subscription != null) {
            return ResponseEntity.ok(subscription);
        }
        return ResponseEntity.notFound().build();
    }

    /**
     * Hủy subscription
     * DELETE /api/subscriptions/{subscriptionId}
     */
    @DeleteMapping("/{subscriptionId}")
    public ResponseEntity<Void> cancelSubscription(@PathVariable Long subscriptionId) {
        subscriptionService.cancelSubscription(subscriptionId);
        return ResponseEntity.noContent().build();
    }

    /**
     * Cập nhật mentor hours used
     * PATCH /api/subscriptions/{subscriptionId}/mentor-hours
     */
    @PatchMapping("/{subscriptionId}/mentor-hours")
    public ResponseEntity<Void> updateMentorHoursUsed(
            @PathVariable Long subscriptionId,
            @RequestParam Integer hoursUsed) {
        subscriptionService.updateMentorHoursUsed(subscriptionId, hoursUsed);
        return ResponseEntity.noContent().build();
    }

    /**
     * Kiểm tra subscription còn hạn không
     * GET /api/subscriptions/{subscriptionId}/valid
     */
    @GetMapping("/{subscriptionId}/valid")
    public ResponseEntity<Boolean> isSubscriptionValid(@PathVariable Long subscriptionId) {
        boolean valid = subscriptionService.isSubscriptionValid(subscriptionId);
        return ResponseEntity.ok(valid);
    }
}
