package com.sayyestothedress.app.controller;

import com.sayyestothedress.app.entity.Dress;
import com.sayyestothedress.app.model.DressDTO;
import com.sayyestothedress.app.service.DressService;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DressController {

    @Autowired private DressService dressService;

    @GetMapping("/dress")
    public List<Dress> fetchDressList()
    {
        return dressService.fetchDressList();
    }

    @GetMapping("/dress/{id}")
    public ResponseEntity<Dress> fetchDressById(@PathVariable int id) {
        Dress dress = dressService.fetchByDressById(id);
        if (dress != null) {
            return ResponseEntity.ok(dress);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/dress/byUser/{userID}")
    public List<Dress> fetchDressesByUserID(@PathVariable int userID) {
        return dressService.fetchDressesByUserID(userID);
    }

    @PostMapping("/dress")
    public ResponseEntity<Dress> fetchDressById(@PathVariable int id, @Valid @RequestBody DressDTO dressDTO) {
        Dress dress = dressService.addDress(dressDTO);
        if (dress != null) {
            return ResponseEntity.ok(dress);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
