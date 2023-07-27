package com.sayyestothedress.app.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping("/login")
    public String viewLogin(){
        return "login";
    }

    @RequestMapping("/signup")
    public String viewSignUp(){
        return "signup";
    }

    @RequestMapping("/home")
    public String viewHome(){
        return "index";
    }
}
