package com.sayyestothedress.app.repository;

import com.sayyestothedress.app.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> { 
    User findByUsername(String username);
}
