package com.sayyestothedress.app.config;

import org.springframework.context.annotation.Bean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;

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
        // http.cors().and().csrf().disable()
        // .authorizeHttpRequests(authorize -> authorize
        // .antMatchers("/login", "/signup", "/js/**", "/css/**", "/images/**")
        // .permitAll()
        // .anyRequest().authenticated())
        // .oauth2Login(oauth -> {oauth.loginPage("/login"); oauth.defaultSuccessUrl("/home");})
        // .logout()
        // .logoutSuccessUrl("/login?logout");

        http.cors().and().csrf().disable()
        .authorizeHttpRequests(authorize -> authorize
        .antMatchers("/login", "/signup", "/js/**", "/css/**", "/images/**")
        .permitAll()
        .anyRequest().authenticated())
        .oauth2ResourceServer().jwt();
    }
  
    @Bean
    public JwtDecoder jwtDecoder() {
      String jwkSetUri = String.format(issuerUri, cognitoRegion, cognitoUserPoolId);
      NimbusJwtDecoder jwtDecoder = NimbusJwtDecoder.withJwkSetUri(jwkSetUri).build();
      System.out.println(jwkSetUri);
    //   jwtDecoder.setClaimSetConverter(new UsernameSubClaimAdapter()); // Extract "sub" claim as "username"
      return jwtDecoder;
    }
    
}







// @Configuration
// @EnableWebSecurity
// public class SecurityConfig extends WebSecurityConfigurerAdapter{

//     @Override
//     protected void configure(HttpSecurity http) throws Exception {
//         http
//             .authorizeRequests()
//                 .antMatchers( "/login", "/login.js", "/styles.css").permitAll() // Allow public access to front-end resources
//                 .antMatchers("/").authenticated() // Secure API endpoints, change "/api/**" to your API endpoint pattern
//             .and()
//                 .csrf().disable(); // For simplicity, disable CSRF protection (not recommended in production)
//     }
    
// }
