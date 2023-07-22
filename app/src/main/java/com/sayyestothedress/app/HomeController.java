package com.sayyestothedress.app;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping("/")
    public String viewHome(){
        return "index";
    }
    
    @RequestMapping("/Favourites")
    public String viewFavourites(){
        return "favourites";
    }
}
