import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/core';
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

  constructor(private http: HttpClient) {}
  getDrinks(): Observable<DrinkModel> {
    let parameters = new HttpParams().set('s', 'margarita');
    return this.http.get<DrinkModel>(this.URL, { params: parameters });
  }
}
