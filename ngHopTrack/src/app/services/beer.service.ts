import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Beer } from '../models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private url = environment.baseUrl + "api/beers";

  constructor(
    private http: HttpClient,

  ) { }

  index(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('BeerService.index(): error retrieving beer: ' + err)
        );
      })
    );
  }

  show(beerId: number): Observable<Beer> {
    return this.http.get<Beer>(this.url + '/' + beerId).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('BeerService.show(): error retrieving beer: ' + err)
        );
      })
    );
  }

  create(beer: Beer): Observable<Beer> {
    beer.completed = false;
    beer.description = '';
    return this.http.post<Beer>(this.url, beer).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('BeerService.create(): error creating beer: ' + err)
        );
      })
    );
  }

  update(updateBeer: Beer): Observable<Beer> {
    return this.http.put<Beer>(this.url + '/' + update.id, updateBeer).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('TodoService.create(): error retrieving todo: ' + err)
        );
      })
    );
  }

  destroy(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('BeerService.delete(): error deleting beer: ' + err)
        );
      })
    );
  }
}

