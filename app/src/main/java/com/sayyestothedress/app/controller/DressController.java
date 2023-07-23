package com.sayyestothedress.app.controller;

import com.sayyestothedress.app.entity.Dress;
import com.sayyestothedress.app.service.DressService;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DressController {

    @Autowired private DressService dressService;

    @GetMapping("/dress")
    public List<Dress> fetchDressList()
    {
        return dressService.fetchDressList();
    }
    
}
