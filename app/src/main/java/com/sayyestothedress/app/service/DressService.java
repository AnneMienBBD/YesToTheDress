package com.sayyestothedress.app.service;

/**
 * DressService
 */
import com.sayyestothedress.app.entity.DressEntity;
import com.sayyestothedress.app.repository.DressRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DressService {

     @Autowired
    private DressRepository dressRepository;

    public List<DressEntity> fetchDressList()
    {
        return dressRepository.findAll();
    }
    
}