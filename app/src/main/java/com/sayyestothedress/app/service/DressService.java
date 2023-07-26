package com.sayyestothedress.app.service;

/**
 * DressService
 */
import com.sayyestothedress.app.entity.Dress;
import com.sayyestothedress.app.model.DressDTO;
import com.sayyestothedress.app.repository.DressRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DressService {

     @Autowired
    private DressRepository dressRepository;

    public List<Dress> fetchDressList()
    {
        return dressRepository.findAll();
    }

    public Dress fetchByDressById(int id) { return dressRepository.findByDressID(id); }

    public List<Dress> fetchDressesByUserID(int userID) {
        return dressRepository.findByUserID(userID);
    }


    public Dress addDress(DressDTO dressDTO){

        Dress dress;


        return dressRepository.save(dress);
    }
    
}