package com.sayyestothedress.app.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping("/landing-page")
    public String viewLogin(){
        return "login";
    }

    @RequestMapping("/")
    public String home(){
        return "index";
    }

    @RequestMapping("/favourites")
    public String viewFavourites(){
        return "favourites";
    }
}
