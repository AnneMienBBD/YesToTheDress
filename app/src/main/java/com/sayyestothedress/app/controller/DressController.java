package com.sayyestothedress.app.controller;

import com.sayyestothedress.app.entity.Dress;
import com.sayyestothedress.app.model.DressDTO;
import com.sayyestothedress.app.service.DressService;
import com.sayyestothedress.app.service.UserService;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DressController {

    @Autowired private DressService dressService;
    @Autowired private UserService userService;

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

    // @PostMapping("/dress")
    // public ResponseEntity<Dress> addDressById(@PathVariable int id, @Valid @RequestBody DressDTO dressDTO) {
    //     Dress dress = dressService.addDress(dressDTO);
    //     if (dress != null) {
    //         return ResponseEntity.ok(dress);
    //     } else {
    //         return ResponseEntity.notFound().build();
    //     }
    // }

    @PostMapping("/dress")
    public ResponseEntity<Dress> addDressById(@RequestParam String user, @Valid @RequestBody Dress dressReq) {
        int userID = userService.findUserId(user);
        //int userID = 2; //To cater for userid from auth later
        Dress dress = dressService.addDress(dressReq, userID);
        if (dress != null) {
            return ResponseEntity.ok(dress);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // @DeleteMapping("/dress/{dressId}")
    // public ResponseEntity<Void> removeDressById(@PathVariable("dressId") int dressId) {
    //     int userID = 2; // To cater for userid from auth later
    //     boolean dressRemoved = dressService.removeDressById(dressId, userID);
    //     if (dressRemoved) {
    //         return ResponseEntity.noContent().build(); // Dress removed successfully, return 204 No Content
    //     } else {
    //         return ResponseEntity.notFound().build(); // Dress with the specified ID not found, return 404 Not Found
    //     }
    // }


    @GetMapping("/getFavourites")
    public List<Dress> fetchDressesByUserID(@RequestParam String user) {
        int userID = userService.findUserId(user); //To cater for userid from auth later
        return dressService.fetchDressesByUserID(userID);
    }
}
