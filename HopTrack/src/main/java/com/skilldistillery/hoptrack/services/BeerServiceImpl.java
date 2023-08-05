package com.skilldistillery.hoptrack.services;

import java.util.List;

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
	public Beer getBeer(int beerId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Beer create(Beer newBeer) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Beer update(int beerId, Beer newBeer) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean delete(int beerId) {
		// TODO Auto-generated method stub
		return false;
	}

}
