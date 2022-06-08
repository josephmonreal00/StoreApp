import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'Products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
})
export class Products {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  posts: any;
  products: string = 'Products';
  constructor(private http: HttpClient) {}

  getPosts() {
    this.posts = this.http.get(this.ROOT_URL + '/posts');
  }
}
