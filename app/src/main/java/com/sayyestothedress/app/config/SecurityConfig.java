package com.sayyestothedress.app.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    
    @Value("${aws.cognito.clientId}")
    private String clientId;

    @Value("${aws.cognito.region}")
    private String cognitoRegion;

    @Value("${aws.cognito.userPoolId}")
    private String cognitoUserPoolId;

    @Value("${aws.cognito.issuer-uri}")
    private String issuerUri;

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.cors().and().csrf().disable()
        .authorizeHttpRequests(authorize -> authorize
        .antMatchers("/login", "/signup", "/js/**", "/css/**", "/images/**", "/home", "/favourites")
        .permitAll()
        .anyRequest().authenticated())
        .oauth2ResourceServer().jwt();
    }
  
}