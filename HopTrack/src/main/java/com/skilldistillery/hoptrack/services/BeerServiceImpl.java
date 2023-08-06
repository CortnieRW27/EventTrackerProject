package com.skilldistillery.hoptrack.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.hoptrack.entities.Beer;
import com.skilldistillery.hoptrack.repositories.BeerRepository;

@Service
public class BeerServiceImpl implements BeerService {
	
	@Autowired
	private BeerRepository beerRepo;
	

	@Override
	public List<Beer> listAllBeers() {
		return beerRepo.findAll();
	}

	@Override
	public Beer findById(int beerId) {
		Optional<Beer> beerOpt = beerRepo.findById(beerId);
		return beerOpt.orElse(null) ;
	}

	@Override
	public Beer create(Beer newBeer) {
		return beerRepo.save(newBeer);
	}

	@Override
	public Beer update(int beerId, Beer newBeer) {
		Optional<Beer> existingBeerOpt = beerRepo.findById(beerId);
		if(existingBeerOpt.isPresent()) {
			Beer existingBeer = existingBeerOpt.get();
			
			existingBeer.setName(newBeer.getName());
			existingBeer.setaBV(newBeer.getaBV());
			existingBeer.setBrewery(newBeer.getBrewery());
			existingBeer.setType(newBeer.getType());
			existingBeer.setDescription(newBeer.getDescription());
			existingBeer.setColor(newBeer.getDescription());
			existingBeer.setRating(newBeer.getRating());
			existingBeer.setFoodPairing(newBeer.getFoodPairing());
			existingBeer.setAvailability(newBeer.getAvailability());
			
			return beerRepo.saveAndFlush(existingBeer);
			
		}else {
			return null;
		}
		
	}

	@Override
	public boolean delete(int beerId) {
		Optional<Beer> toDeleteOpt = beerRepo.findById(beerId);
		if(toDeleteOpt.isPresent()) {
			Beer toDelete = toDeleteOpt.get();
			beerRepo.delete(toDelete);
			return true;
		}
		return false;
	}



}
