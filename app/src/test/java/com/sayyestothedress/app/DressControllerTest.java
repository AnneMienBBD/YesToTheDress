package com.sayyestothedress.app;

import com.sayyestothedress.app.controller.DressController;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.hamcrest.Matchers.hasSize;

@SpringBootTest
@AutoConfigureMockMvc
public class DressControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testFetchDressList() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/dress"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$",hasSize(1)));
    }

    @Test
    public void testFetchDressById() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/dress/1"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.dressID").value(1));

    }

}
