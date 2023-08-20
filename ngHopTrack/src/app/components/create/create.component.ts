import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newBeer: Beer = new Beer();

  constructor(private beerService: BeerService,) { }

  ngOnInit() {
  }

  create(beer: Beer): void {
    this.beerService.create(beer).subscribe({
      next: (createdBeer) => {
        this.newBeer = new Beer();
        window.location.reload();
      },
      error: (fail) => {
        console.error('BeerComponent.addBeer: error creating beer');
        console.error(fail);
      },
    });
  }
}
