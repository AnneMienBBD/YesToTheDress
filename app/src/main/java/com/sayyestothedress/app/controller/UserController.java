package com.sayyestothedress.app.controller;
import java.util.List;

import com.sayyestothedress.app.entity.User;
import com.sayyestothedress.app.service.UserService;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired private UserService userService;

    // @GetMapping("/users")
    // public List<User> fetchUserList()
    // {
    //     return userService.fetchUser();
    // }

    @PostMapping("/user/{username}")
    public ResponseEntity<User> addUser(@PathVariable String username) {
        User user = userService.addUser(username);
        if(user != null){
            return ResponseEntity.ok(user);
        }else{
            return ResponseEntity.notFound().build();
        }
    }
    
}

