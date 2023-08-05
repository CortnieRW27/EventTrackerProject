package com.skilldistillery.hoptrack.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.hoptrack.entities.Beer;
import com.skilldistillery.hoptrack.services.BeerService;

@RestController
@RequestMapping("api")
public class BeerController {
	
	@Autowired
	private BeerService beerService;
	
	@GetMapping("beers")
	List<Beer> listBeer() {
		return beerService.listAllBeers();
		
	}

}
