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
        // Assuming UserRequest is a class representing the data received in the request body
        // You can create this class to capture the necessary fields like username and password.

        String username = userRequest.getUsername();
        // String password = userRequest.getPassword();

        // Add any validation or additional logic here, if needed.

        User newUser = userService.addUserByUsername(username);

        // Return a response with the newly added user and a status code of 201 (CREATED)
        return ResponseEntity.status(201).body(newUser);
    }

    // @Autowired private UserService userService;

    // @GetMapping("/users")
    // public List<User> fetchUserList()
    // {
    //     return userService.fetchUser();
    // }

    // @PostMapping("/user")
    // public ResponseEntity<User> addUserByUsername(@Valid @RequestBody User userReq) {
    //     User user = userService.addDress(userReq, username);
    //     if (user != null) {
    //         return ResponseEntity.ok(user);
    //     } else {
    //         return ResponseEntity.notFound().build();
    //     }
    // }
    
}

