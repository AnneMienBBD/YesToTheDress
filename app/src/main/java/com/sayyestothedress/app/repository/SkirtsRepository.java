package com.sayyestothedress.app.repository;

import com.sayyestothedress.app.entity.Skirts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkirtsRepository extends JpaRepository<Skirts, Integer> {
    Skirts findFirstBySkirtName(String skirtName);
    
}
