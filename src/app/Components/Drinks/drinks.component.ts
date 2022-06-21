import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DrinkModel } from './DrinkModel';
import { Observable, of, from } from 'rxjs';
import { DrinkDetails } from '../../Components/Drinks/DrinkDetails';

@Component({
  selector: 'drinks',
  styleUrls: [],
  templateUrl: 'drinks.component.html',
})
export class Drinks {
  URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
  drinks: Observable<DrinkModel>;
  drinkDets: Observable<DrinkDetails[]>;

  constructor(private http: HttpClient) {}
  getDrinks(): Observable<DrinkModel> {
    let parameters = new HttpParams().set('s', 'margarita');
    this.drinks = this.http.get<DrinkModel>(this.URL, { params: parameters });
    return this.drinks;
  }

  printInformation(): void {
    this.drinks.subscribe({
      next: (item) => {
        console.log('Item');
        console.log(item.drinks);
        this.drinkDets = of(item.drinks);
      },
      error: (err) => console.log(err),
      complete: () => console.log('complete'),
    });
  }
}
