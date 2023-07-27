package com.sayyestothedress.app.service;


import com.sayyestothedress.app.entity.User;
import com.sayyestothedress.app.repository.UserRepository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {


    @Autowired
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Transactional
    public User addUserByUsername(String username) {
        User user = new User();
        user.setUsername(username);

        // Perform any other necessary operations on the user object before saving.

        return userRepository.save(user);
    }

    public List<User> fetchUser()
    {
        return userRepository.findAll();
    }

    
    
}
