import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DrinkModel } from './DrinkModel';
import { Observable } from 'rxjs';

@Component({
  selector: 'drinks',
  styleUrls: [],
  templateUrl: 'drinks.component.html',
})
export class Drinks {
  URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
  drinks: Observable<DrinkModel>;
  theDrinks: any;

  constructor(private http: HttpClient) {}
  getDrinks(): Observable<DrinkModel> {
    let parameters = new HttpParams().set('s', 'margarita');
    this.drinks = this.http.get<DrinkModel>(this.URL, { params: parameters });
    return this.drinks;
  }

  printInformation(): void {
    console.log(
      this.drinks.subscribe({
        next: (item) => {
          this.theDrinks = item.TheDrinks;
        },
        error: (err) => console.log(err),
        complete: () => console.log('complete'),
      })
    );
  }
}
