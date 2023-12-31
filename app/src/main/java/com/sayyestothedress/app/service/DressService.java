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

    // // For dressRepository to be available, you should have a repository interface for Dress defined.
    // public boolean removeDressById(int dressId, int userId) {
    //     Optional<Dress> optionalDress = dressRepository.findByIdAndUserId(dressId, userId);

    //     if (optionalDress.isPresent()) {
    //         dressRepository.deleteById(dressId);
    //         return true; // Dress successfully deleted
    //     } else {
    //         return false; // Dress with the specified ID not found or does not belong to the user
    //     }
    // }

    
    public Dress addDress(DressDTO dressDTO){

         Dress.DressBuilder dress = Dress.builder();

         dress.userID(4);

        if (dressDTO.getShoes() != null){
           dress.shoesID(shoesRepository.findFirstByShoeName(dressDTO.getShoes()).getShoesID());
        }

        if (dressDTO.getSkirt() != null){
            dress.skirtID(skirtsRepository.findFirstBySkirtName(dressDTO.getSkirt()).getSkirtID());
        }

        if (dressDTO.getSleeves() != null){
           dress.sleeveID(sleevesRepository.findFirstBySleeveName(dressDTO.getSleeves()).getSleeveID());
        }

          if (dressDTO.getTop() != null){
            dress.topID(topsRepository.findFirstByTopName(dressDTO.getTop()).getTopID());
        }

          if (dressDTO.getTrain() != null){
            dress.trainID(trainRepository.findFirstByTrainName(dressDTO.getTrain()).getTrainID());
        }
        
         if (dressDTO.getVeil() != null){
          dress.veilID(veilsRepository.findFirstByVeilName(dressDTO.getVeil()).getVeilID());
        }
        
        Dress saveDress = dress.build();
        return dressRepository.save(saveDress);
    }
    
}