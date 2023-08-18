import { Component } from '@angular/core';
import { Beer } from 'src/app/models/beer';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
beerList: Beer[] = [];

constructor(
  private beerService: BeerService
) {}

ngOnInit(): void {
this.reload();
}

reload() {
  this.beerService.index().subscribe({
    next:(list) => {
      this.beerList = list;
    },
    error: (fail) => {
      console.error('HomeComponent.reload(): error getting beers');
      console.error(fail);
    }
  });
}
}
