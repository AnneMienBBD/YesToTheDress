package com.sayyestothedress.app.repository;


import com.sayyestothedress.app.entity.Tops;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TopsRepository extends JpaRepository<Tops, Integer> {
    Tops findFirstByTopName(String topName);
    
}
