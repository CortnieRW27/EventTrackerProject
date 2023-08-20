import { Pipe, PipeTransform } from '@angular/core';
import { Beer } from '../models/beer';

@Pipe({
  name: 'beerName'
})
export class BeerNamePipe implements PipeTransform {

  transform(beer: Beer [], typeName: string): Beer [] {
    if (typeName === 'all') {
      return beer;
    }
    let results: Beer[] = [];
    beer.forEach((beer) => {
        if (beer.type === typeName) {
          results.push(beer);
        }
    });
    return results;
  }
}
