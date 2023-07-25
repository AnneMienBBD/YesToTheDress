package com.sayyestothedress.app.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import com.sayyestothedress.app.entity.User;
import com.sayyestothedress.app.service.UserService;



@RestController
public class UserController {

    @Autowired private UserService userService;

    @GetMapping("/users")
    public List<User> fetchUserList()
    {
        return userService.fetchUser();
    }
    
}
