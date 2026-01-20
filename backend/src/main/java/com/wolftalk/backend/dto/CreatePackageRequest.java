package com.wolftalk.backend.dto;

import java.math.BigDecimal;

public class CreatePackageRequest {

    private String packageCode;
    private String packageName;
    private String description;
    private BigDecimal price;
    private BigDecimal monthlyPrice;
    private BigDecimal annualPrice;
    private Boolean hasMentor;
    private Integer mentorHoursPerMonth;

    // Getters and Setters
    public String getPackageCode() {
        return packageCode;
    }

    public void setPackageCode(String packageCode) {
        this.packageCode = packageCode;
    }

    public String getPackageName() {
        return packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public BigDecimal getMonthlyPrice() {
        return monthlyPrice;
    }

    public void setMonthlyPrice(BigDecimal monthlyPrice) {
        this.monthlyPrice = monthlyPrice;
    }

    public BigDecimal getAnnualPrice() {
        return annualPrice;
    }

    public void setAnnualPrice(BigDecimal annualPrice) {
        this.annualPrice = annualPrice;
    }

    public Boolean getHasMentor() {
        return hasMentor;
    }

    public void setHasMentor(Boolean hasMentor) {
        this.hasMentor = hasMentor;
    }

    public Integer getMentorHoursPerMonth() {
        return mentorHoursPerMonth;
    }

    public void setMentorHoursPerMonth(Integer mentorHoursPerMonth) {
        this.mentorHoursPerMonth = mentorHoursPerMonth;
    }
}
