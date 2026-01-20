package com.wolftalk.backend.dto;

import com.wolftalk.backend.entity.UserSubscription.BillingCycle;

public class CreateSubscriptionRequest {

    private Long userId;
    private Long packageId;
    private BillingCycle billingCycle; // MONTHLY, ANNUAL, ONE_TIME

    // Getters and Setters
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getPackageId() {
        return packageId;
    }

    public void setPackageId(Long packageId) {
        this.packageId = packageId;
    }

    public BillingCycle getBillingCycle() {
        return billingCycle;
    }

    public void setBillingCycle(BillingCycle billingCycle) {
        this.billingCycle = billingCycle;
    }
}
