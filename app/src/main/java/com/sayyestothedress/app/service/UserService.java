package com.sayyestothedress.app.service;


import com.sayyestothedress.app.entity.User;
import com.sayyestothedress.app.repository.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {


    @Autowired
    private UserRepository userRepository;

    public List<User> fetchUser()
    {
        return userRepository.findAll();
    }

    
    
}
