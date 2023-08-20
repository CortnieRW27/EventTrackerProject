import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beer } from 'src/app/models/beer';
import { BeerNamePipe } from 'src/app/pipes/beer-name.pipe';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

selectedType: string = "all";
types = [
'all',
'Lager',
'Pale Ale',
'IPA',
'Stout',
'Porter'
];


title = 'Event Tracker: Beer';
beerList: Beer[] = [];
selected: Beer | null = null;
newBeer: Beer = new Beer();
editBeer: Beer | null = null;
showCompleted: boolean = false;


constructor(
  private beerService: BeerService,
  private beerNamePipe: BeerNamePipe,
  private activatedRoute: ActivatedRoute,
  private router: Router
) {}

selectBeer(beer: Beer): void {
  this.selected = beer;
}

displayBeer(beer: Beer) {
  this.selected = beer;
}

displayTable() {
  this.selected = null;
}

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
setEditTodo() {
  this.editBeer = Object.assign({}, this.selected);
}
updateBeer(beer: Beer, setSelected: boolean = true) {
  this.beerService.updateBeer(beer).subscribe({
    next: (updateBeer) => {
      if (setSelected) {
        this.selected = updateBeer;
      }
      this.editBeer = null;
      this.reload();
    },
    error: (fail) => {
      console.error('BeerComponent.updateBeer: error updating beer');
      console.error(fail);
    },
  });
}

deleteBeer(id: number) {
  this.beerService.destroy(id).subscribe({
    next: () => {
      this.reload();
    },
    error: (toobad) => {
      console.error('BeerComponent.deleteBeer: error deleting beer');
      console.log(toobad);
    },
  });
}
}
