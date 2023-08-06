package com.skilldistillery.hoptrack.services;

import java.util.List;

import com.skilldistillery.hoptrack.entities.Beer;

public interface BeerService {
	List<Beer> listAllBeers();
	
	Beer findById(int beerId);
	
	Beer create(Beer newBeer);
	
	Beer update(int beerId, Beer newBeer);
	
	boolean delete(int beerId);

}
