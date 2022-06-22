import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DogResponseModel } from '../../Components/Dogs/dogResponseModel';
@Component({
  selector: 'dogs',
  templateUrl: 'dogs.component.html',
  styleUrls: ['dogs.component.css'],
})
export class DogsComponent {
  URL = 'https://dog.ceo/api/breeds/image/random';
  dogs: Observable<DogResponseModel>;
  displayDog: any;

  constructor(private http: HttpClient) {}

  getDogs(): Observable<DogResponseModel> {
    return this.http.get<DogResponseModel>(this.URL);
  }

  displayDogs(): void {
    this.getDogs().subscribe({
      next: (item) => console.log(item),
    });
  }
}
