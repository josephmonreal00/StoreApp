import { Component } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Post } from './post';
import { Observable, pipe, map, tap, take } from 'rxjs';
import { Memes } from '../../Components/Products/memes';
import { AMeme } from '../../Components/Products/ameme';

@Component({
  selector: 'Products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
})
export class Products {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  readonly MEMEURL = 'https://api.imgflip.com/get_memes';
  memes: Memes;
  posts: Observable<Post[]>;
  products: string = 'Products';
  newPost: Observable<any>;

  constructor(private http: HttpClient) {}

  getPosts() {
    let params = new HttpParams().set('userId', '1');
    let headers = new HttpHeaders().set('Authorization', 'auth-token');

    this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts', { params });

    let header = new HttpHeaders().set('Content-Type', 'application/json');

    this.memes = this.http
      .get<HttpResponse<Memes>>(this.MEMEURL, {
        headers: header,
        responseType: 'json',
      })
      .pipe(
        map((item) => {
          let data = item.ameme.data.memes[0];
          console.log(item);
        })
      )
      .subscribe({
        next: (meme) => {
          console.log(meme);
        },
        error: (err) => console.log(err),
        complete: () => console.log('complete'),
      });

    // .subscribe(
    //   (data) => {
    //     var data_ = data;
    //     console.log(data_);
    //   },
    //   (error) => {
    //     throw error;
    //   },
    //   () => {
    //     console.log('finished');
    //   }
    // );

    // .subscribe({
    //   next: (meme) => console.log(meme),
    //   error: (err) => console.log(err),
    //   complete: () => console.log('Complete'),
    // });

    // console.log(this.memes);

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
