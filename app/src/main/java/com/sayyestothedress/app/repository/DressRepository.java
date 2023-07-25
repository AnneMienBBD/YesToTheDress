package com.sayyestothedress.app.repository;

import com.sayyestothedress.app.entity.Dress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DressRepository extends JpaRepository<Dress, Integer> {
    Dress findByDressID(int dressID);
    List<Dress> findByUserID(int userID);
}
