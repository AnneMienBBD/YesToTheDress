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
public class Shoes {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer shoesID;
    private String shoeName;
    private String colour;

    
}
