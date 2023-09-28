package com.sayyestothedress.app;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sayyestothedress.app.entity.Dress;
import com.sayyestothedress.app.service.DressService;
import com.sayyestothedress.app.service.UserService;

import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.when;

import org.springframework.http.MediaType;

@SpringBootTest
@AutoConfigureMockMvc
public class DressControllerTest {

    @Autowired
    private MockMvc mockMvc;


    @Test
    public void testFetchDressList() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/dress"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$").isArray())
                .andExpect(MockMvcResultMatchers.jsonPath("$").isNotEmpty());
    }

    @Test
    public void testFetchDressById() throws Exception {
        int dressIdToFetch = 1;

        mockMvc.perform(MockMvcRequestBuilders.get("/dress/1"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$", hasKey("dressID")))
                .andExpect(MockMvcResultMatchers.jsonPath("$", hasKey("userID")))
                .andExpect(MockMvcResultMatchers.jsonPath("$", hasKey("skirtID")))
                .andExpect(MockMvcResultMatchers.jsonPath("$", hasKey("topID")))
                .andExpect(MockMvcResultMatchers.jsonPath("$", hasKey("veilID")))
                .andExpect(MockMvcResultMatchers.jsonPath("$", hasKey("shoesID")))
                .andExpect(MockMvcResultMatchers.jsonPath("$", hasKey("sleeveID")))
                .andExpect(MockMvcResultMatchers.jsonPath("$", hasKey("trainID")))
                .andExpect(MockMvcResultMatchers.jsonPath("$.dressID", is(dressIdToFetch)));
    }

    @Test
    public void testFetchDressesByUserID() throws Exception {
        int userIdToFetch = 2;

        mockMvc.perform(MockMvcRequestBuilders.get("/dress/byUser/{userID}", userIdToFetch))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$").isArray())
                .andExpect(MockMvcResultMatchers.jsonPath("$").isNotEmpty());
    }
}
