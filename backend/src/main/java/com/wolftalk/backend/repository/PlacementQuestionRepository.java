package com.wolftalk.backend.repository;

import com.wolftalk.backend.entity.PlacementQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlacementQuestionRepository extends JpaRepository<PlacementQuestion, Long> {
    List<PlacementQuestion> findByLevel(String level);
    List<PlacementQuestion> findByLevelAndType(String level, String type);
}
