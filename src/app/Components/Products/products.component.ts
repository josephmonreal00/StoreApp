import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Post } from './post';
import { Observable, pipe, map, tap, take } from 'rxjs';

@Component({
  selector: 'Products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
})
export class Products {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  readonly MEMEURL = 'https://api.imgflip.com/get_memes';
  memes: any;
  posts: Observable<Post[]>;
  products: string = 'Products';
  newPost: Observable<any>;
  theMemes: any;

  constructor(private http: HttpClient) {}

  getPosts() {
    let params = new HttpParams().set('userId', '1');
    let headers = new HttpHeaders().set('Authorization', 'auth-token');

    this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts', { params });

    this.memes = this.http.get(this.MEMEURL).subscribe({
      next: (meme) => console.log(meme),
      error: (err) => console.log(err),
      complete: () => console.log('Complete'),
    });

    // deserialize response correctly
  }

  createPost() {
    const data: Post = {
      id: null,
      userId: 23,
      title: 'Joes new post',
      body: 'Recently got injured',
    };

    this.newPost = this.http.post(this.ROOT_URL + '/posts', data).pipe(
      map((item) => console.log(item)),
      tap((item) => console.log(item))
    );
  }
}
