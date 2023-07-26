package com.sayyestothedress.app.repository;

import com.sayyestothedress.app.entity.Train;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainRepository extends JpaRepository<Train, Integer> {
    Train findFirstByTrainName(String trainName);
    
}
