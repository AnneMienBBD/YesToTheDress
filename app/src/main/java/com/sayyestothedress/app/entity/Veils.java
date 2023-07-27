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
public class Veils {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer veilID;
    private String veilName;
    private String colour;

    
}