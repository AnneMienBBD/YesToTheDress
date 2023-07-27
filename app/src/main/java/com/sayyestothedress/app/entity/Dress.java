package com.sayyestothedress.app.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
  
// Importing required classes 
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Dress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer dressID;
    private Integer userID;
    private Integer skirtID;
    private Integer topID;
    private Integer veilID;
    private Integer shoesID;
    private Integer sleeveID;
    private Integer trainID;
    
}
