package com.sayyestothedress.app.service;

/**
 * DressService
 */
import com.sayyestothedress.app.entity.Dress;
import com.sayyestothedress.app.model.DressDTO;
import com.sayyestothedress.app.repository.DressRepository;
import com.sayyestothedress.app.repository.ShoesRepository;
import com.sayyestothedress.app.repository.SkirtsRepository;
import com.sayyestothedress.app.repository.SleevesRepository;
import com.sayyestothedress.app.repository.TopsRepository;
import com.sayyestothedress.app.repository.TrainRepository;
import com.sayyestothedress.app.repository.VeilsRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DressService {

     @Autowired
    private DressRepository dressRepository;
     @Autowired
    private ShoesRepository shoesRepository;
     @Autowired
    private SkirtsRepository skirtsRepository;
     @Autowired
    private SleevesRepository sleevesRepository;
     @Autowired
    private TopsRepository topsRepository;
     @Autowired
    private TrainRepository trainRepository;
     @Autowired
    private VeilsRepository veilsRepository;


    public List<Dress> fetchDressList()
    {
        return dressRepository.findAll();
    }

    public Dress fetchByDressById(int id) { return dressRepository.findByDressID(id); }

    public List<Dress> fetchDressesByUserID(int userID) {
        return dressRepository.findByUserID(userID);
    }

    public Dress addDress(Dress dressDTO, int id){
        dressDTO.setUserID(id);
        return dressRepository.save(dressDTO);
    }
    
}