package com.sayyestothedress.app;

import com.sayyestothedress.app.entity.Dress;
import com.sayyestothedress.app.repository.*;
import com.sayyestothedress.app.service.DressService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class DressServiceTest {

    @InjectMocks
    private DressService dressService;

    @Mock
    private DressRepository dressRepository;

    @Mock
    private ShoesRepository shoesRepository;

    @Mock
    private SkirtsRepository skirtsRepository;

    @Mock
    private SleevesRepository sleevesRepository;

    @Mock
    private TopsRepository topsRepository;

    @Mock
    private TrainRepository trainRepository;

    @Mock
    private VeilsRepository veilsRepository;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testFetchDressList() {
        List<Dress> mockDressList = new ArrayList<>();
        when(dressRepository.findAll()).thenReturn(mockDressList);

        List<Dress> result = dressService.fetchDressList();

        assertEquals(mockDressList, result);
    }

    @Test
    public void testFetchByDressById() {

        int dressId = 1;
        Dress mockDress = new Dress();
        when(dressRepository.findByDressID(dressId)).thenReturn(mockDress);

        Dress result = dressService.fetchByDressById(dressId);

        assertEquals(mockDress, result);
    }
}

