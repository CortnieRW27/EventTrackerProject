export class Beer {
id: number;
name: string;
abv: number;
brewery: string;
type: string;
description: string;
color: string;
rating: number;
foodPairing: string;
imageURL: string;
availability: string;


  constructor(id: number = 0, 
  name: string = "", 
  abv: number = 0,
  brewery: string = "",
  type: string = "",
  description: string = "",
  color: string = "",
  rating: number = 0,
  foodPairing: string = "",
  imageURL: string = "",
  availability: string = "") { 
    
    this.id = id;
    this.name = name;
    this.abv = abv;
    this.brewery = brewery;
    this.type = type;
    this.description = description;
    this.color = color;
    this.rating = rating;
    this.foodPairing = foodPairing;
    this.imageURL = imageURL;
    this.availability = availability;
  }
}
