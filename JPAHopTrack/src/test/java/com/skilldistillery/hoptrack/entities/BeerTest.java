package com.skilldistillery.hoptrack.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class BeerTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Beer beer;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPAHopTrack");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		beer = em.find(Beer.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		beer = null;
	}

	@Test
	void test() {
		assertNotNull(beer);
		assertNotNull(beer.getName());
		assertEquals("Voodoo Ranger Juicy Haze", beer.getName());
	}

}
