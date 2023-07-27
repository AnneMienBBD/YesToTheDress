package com.sayyestothedress.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sayyestothedress.app.entity.User;
import com.sayyestothedress.app.service.UserService;



@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("user")
    public ResponseEntity<User> addUser(@RequestBody User userRequest) {

        String username = userRequest.getUsername();
        // Add any validation or additional logic here, if needed.

        User newUser = userService.addUserByUsername(username);

        // Return a response with the newly added user and a status code of 201 (CREATED)
        return ResponseEntity.status(201).body(newUser);
    }

    
}

