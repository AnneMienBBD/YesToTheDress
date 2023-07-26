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
public class Skirts {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer skirtID;
    private String skirtName;
    private String colour;

    
}
