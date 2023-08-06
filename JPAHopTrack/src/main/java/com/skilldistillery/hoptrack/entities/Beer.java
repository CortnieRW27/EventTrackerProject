package com.skilldistillery.hoptrack.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Beer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String name;
	
	private double aBV;
	
	private String brewery;
	
	private String type;
	
	private String description;
	
	private String color;
	
	private double rating;
	
	@Column(name = "food_pairing")
	private String foodPairing;
	
	@Column(name = "image_url")
	private String imageURL;
	
	private String availability;

	
	public Beer() {

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	

	public double getaBV() {
		return aBV;
	}

	public void setaBV(double aBV) {
		this.aBV = aBV;
	}

	public String getBrewery() {
		return brewery;
	}

	public void setBrewery(String brewery) {
		this.brewery = brewery;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public String getFoodPairing() {
		return foodPairing;
	}

	public void setFoodPairing(String foodPairing) {
		this.foodPairing = foodPairing;
	}

	public String getImageURL() {
		return imageURL;
	}

	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}

	public String getAvailability() {
		return availability;
	}

	public void setAvailability(String availability) {
		this.availability = availability;
	}

	@Override
	public String toString() {
		return "Beer [id=" + id + ", name=" + name + ", aBV=" + aBV + ", brewery=" + brewery + ", type=" + type
				+ ", description=" + description + ", color=" + color + ", rating=" + rating + ", foodPairing="
				+ foodPairing + ", imageURL=" + imageURL + ", availability=" + availability + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Beer other = (Beer) obj;
		return id == other.id;
	}

}
