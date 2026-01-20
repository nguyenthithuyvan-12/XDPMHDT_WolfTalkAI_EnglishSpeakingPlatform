package com.wolftalk.backend.dto;

import java.math.BigDecimal;
import java.util.List;

public class LearningPackageDTO {

    private Long id;
    private String packageCode;
    private String packageName;
    private String description;
    private BigDecimal price;
    private BigDecimal monthlyPrice;
    private BigDecimal annualPrice;
    private Boolean hasMentor;
    private Integer mentorHoursPerMonth;
    private Boolean active;
    private List<String> features;

    // Constructors
    public LearningPackageDTO() {}

    public LearningPackageDTO(Long id, String packageCode, String packageName, 
                             String description, BigDecimal price, Boolean hasMentor) {
        this.id = id;
        this.packageCode = packageCode;
        this.packageName = packageName;
        this.description = description;
        this.price = price;
        this.hasMentor = hasMentor;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public List<String> getFeatures() {
        return features;
    }

    public void setFeatures(List<String> features) {
        this.features = features;
    }
}
