package com.sayyestothedress.app.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping("/login")
    public String viewLogin(){
        return "login";
    }
}
