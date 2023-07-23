package com.sayyestothedress.app.repository;

import com.sayyestothedress.app.entity.DressEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DressRepository extends JpaRepository<DressEntity, Integer> { 
}
