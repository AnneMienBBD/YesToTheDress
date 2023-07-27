package com.sayyestothedress.app.repository;


import com.sayyestothedress.app.entity.Veils;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VeilsRepository extends JpaRepository<Veils, Integer> {
    Veils findFirstByVeilName(String veilName);
    
}
