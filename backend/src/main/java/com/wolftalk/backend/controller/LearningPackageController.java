package com.wolftalk.backend.controller;

import com.wolftalk.backend.dto.LearningPackageDTO;
import com.wolftalk.backend.dto.PackageComparisonDTO;
import com.wolftalk.backend.dto.CreatePackageRequest;
import com.wolftalk.backend.service.LearningPackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/packages")
@CrossOrigin(origins = "*", maxAge = 3600)
public class LearningPackageController {

    @Autowired
    private LearningPackageService learningPackageService;

    /**
     * Lấy tất cả các gói học
     * GET /api/packages
     */
    @GetMapping
    public ResponseEntity<List<LearningPackageDTO>> getAllPackages() {
        List<LearningPackageDTO> packages = learningPackageService.getAllPackages();
        return ResponseEntity.ok(packages);
    }

    /**
     * Lấy gói học theo ID
     * GET /api/packages/{id}
     */
    @GetMapping("/{id}")
    public ResponseEntity<LearningPackageDTO> getPackageById(@PathVariable Long id) {
        LearningPackageDTO pkg = learningPackageService.getPackageById(id);
        if (pkg != null) {
            return ResponseEntity.ok(pkg);
        }
        return ResponseEntity.notFound().build();
    }

    /**
     * Lấy gói học theo code
     * GET /api/packages/code/{code}
     */
    @GetMapping("/code/{code}")
    public ResponseEntity<LearningPackageDTO> getPackageByCode(@PathVariable String code) {
        LearningPackageDTO pkg = learningPackageService.getPackageByCode(code);
        if (pkg != null) {
            return ResponseEntity.ok(pkg);
        }
        return ResponseEntity.notFound().build();
    }

    /**
     * Lấy các gói có mentor
     * GET /api/packages/mentor/with
     */
    @GetMapping("/mentor/with")
    public ResponseEntity<List<LearningPackageDTO>> getPackagesWithMentor() {
        List<LearningPackageDTO> packages = learningPackageService.getPackagesWithMentor();
        return ResponseEntity.ok(packages);
    }

    /**
     * Lấy các gói không có mentor
     * GET /api/packages/mentor/without
     */
    @GetMapping("/mentor/without")
    public ResponseEntity<List<LearningPackageDTO>> getPackagesWithoutMentor() {
        List<LearningPackageDTO> packages = learningPackageService.getPackagesWithoutMentor();
        return ResponseEntity.ok(packages);
    }

    /**
     * Lấy thông tin so sánh các gói
     * GET /api/packages/comparison/all
     */
    @GetMapping("/comparison/all")
    public ResponseEntity<List<PackageComparisonDTO>> getPackageComparison() {
        List<PackageComparisonDTO> comparisons = learningPackageService.getPackageComparison();
        return ResponseEntity.ok(comparisons);
    }

    /**
     * Tạo gói học mới (Admin)
     * POST /api/packages
     */
    @PostMapping
    public ResponseEntity<LearningPackageDTO> createPackage(@RequestBody CreatePackageRequest request) {
        LearningPackageDTO pkg = learningPackageService.createPackage(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(pkg);
    }

    /**
     * Cập nhật gói học (Admin)
     * PUT /api/packages/{id}
     */
    @PutMapping("/{id}")
    public ResponseEntity<LearningPackageDTO> updatePackage(@PathVariable Long id,
                                                            @RequestBody CreatePackageRequest request) {
        LearningPackageDTO pkg = learningPackageService.updatePackage(id, request);
        if (pkg != null) {
            return ResponseEntity.ok(pkg);
        }
        return ResponseEntity.notFound().build();
    }

    /**
     * Xóa gói học (Admin)
     * DELETE /api/packages/{id}
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePackage(@PathVariable Long id) {
        learningPackageService.deletePackage(id);
        return ResponseEntity.noContent().build();
    }

    /**
     * Thêm tính năng vào gói
     * POST /api/packages/{id}/features
     */
    @PostMapping("/{id}/features")
    public ResponseEntity<Void> addFeatureToPackage(
            @PathVariable Long id,
            @RequestParam String featureName,
            @RequestParam(required = false) String description,
            @RequestParam(defaultValue = "true") Boolean included) {
        learningPackageService.addFeatureToPackage(id, featureName, description, included);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
