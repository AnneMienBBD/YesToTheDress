package com.sayyestothedress.app.model;

public class Dress {

    private String top;
    private String skirt;
    //private String train;
    //private String shoes;
    //private String sleeves;
    //private String veil;
    private String username;

    public Dress(String top, String skirt, String username){
        this.top = top;
        this.skirt = skirt;
        this.username = username;
    } 

    public String getTop(){
        return top;
    }

    public void setTop(String top){
        this.top = top;
    }

    public String getSkirt(){
        return skirt;
    }

    public void setSkirt(String skirt){
        this.skirt = skirt;
    }

    public String getUsername(){
        return username;
    }

    public void setUsername(String username){
        this.username = username;
    }
}
