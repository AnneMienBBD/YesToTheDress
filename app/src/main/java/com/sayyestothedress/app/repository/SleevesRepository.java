package com.sayyestothedress.app.repository;

import com.sayyestothedress.app.entity.Sleeves;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SleevesRepository extends JpaRepository<Sleeves, Integer> {
    Sleeves findFirstBySleeveName(String sleeveName);
    
}
