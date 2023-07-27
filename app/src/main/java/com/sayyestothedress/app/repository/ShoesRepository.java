package com.sayyestothedress.app.repository;

import com.sayyestothedress.app.entity.Shoes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoesRepository extends JpaRepository<Shoes, Integer> {
    Shoes findFirstByShoeName(String shoeName);
    
}
