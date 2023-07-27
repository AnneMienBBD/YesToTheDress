package com.sayyestothedress.app.controller;

import com.sayyestothedress.app.entity.Dress;
import com.sayyestothedress.app.service.DressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
public class FavouritesController {
    @Autowired
    private DressService dressService;

    @RequestMapping("/favourites")
    public String viewFavourites(){
        return "favourites";
    }

}
