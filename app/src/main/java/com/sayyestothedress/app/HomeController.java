package com.sayyestothedress.app;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping("/Login")
    public String viewLogin(){
        return "login";
    }
}
