package com.skilldistillery.hoptrack.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.hoptrack.entities.Beer;

public interface BeerRepository extends JpaRepository<Beer, Integer> {

}
