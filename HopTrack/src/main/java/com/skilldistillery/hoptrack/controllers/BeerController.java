package com.skilldistillery.hoptrack.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.skilldistillery.hoptrack.entities.Beer;
import com.skilldistillery.hoptrack.services.BeerService;

@RestController
@RequestMapping("api")
public class BeerController {

	@Autowired
	private BeerService beerService;

	@GetMapping("beers")
	public List<Beer> listBeer() {
		return beerService.listAllBeers();

	}

	@GetMapping("beers/{beerId}")
	public Beer findBeerById(@PathVariable Integer beerId) {
		Beer beer = beerService.findById(beerId);
		return beer;

	}

	@PostMapping("beers")
	public Beer createNewBeer(@RequestBody Beer beer, HttpServletResponse res, HttpServletRequest req) {
		try {
			beer = beerService.create(beer);
			if (beer == null) {
				res.setStatus(422);

			} else {
				res.setStatus(201);
				StringBuffer url = req.getRequestURL();
				res.setHeader("Location", url.append("/").append(beer.getId()).toString());
			}
		} catch (Exception e) {
			e.printStackTrace();
			beer = null;
		}
		return beer;
	}

	@PutMapping("beers/{beerId}")
	public Beer updateBeer(@PathVariable Integer beerId, @RequestBody Beer beer, HttpServletResponse res,
			HttpServletRequest req) {
		try {
			beer = beerService.update(beerId, beer);
			if (beer == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			beer = null;
		}
		return beer;
	}

	@DeleteMapping("beers/{beerId}")
	public void deleteBeer(@PathVariable Integer beerId, HttpServletResponse res, HttpServletRequest req) {
		if (beerService.delete(beerId)) {
			res.setStatus(204);

		} else {
			res.setStatus(404);
		}

	}

}
