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
import { WeatherDetails } from '../../Components/Products/WeatherDetails';
import { Weather } from '../../Components/Products/weather';

@Component({
  selector: 'Products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css'],
})
export class Products {
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  readonly MEMEURL = 'https://api.imgflip.com/get_memes';
  readonly WEATHERURL =
    'https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0';
  memes: Memes[];

  weather: Weather;

  posts: Observable<Post[]>;
  products: string = 'Products';
  newPost: Observable<any>;
  ngOnInIt() {
    // console.log('ngon');
    // this.getMemes().subscribe(
    //   (data: Memes[]) => (this.memes = data),
    //   (err: any) => console.log(err),
    //   () => console.log('All done')
    // );
  }

  saveWeather(): void {
    this.getWeather().subscribe({
      next: (data: Weather) => {
        this.weather = data;
        console.log(this.weather);
      },
      error: (err) => console.log(err),
      complete: () => console.log('weather complete'),
    });

    console.log(this.weather.dataseries[0]);
  }

  getWeather(): Observable<Weather> {
    console.log('getweather');
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http
      .get<Weather>(this.WEATHERURL, {
        headers: header,
        responseType: 'json',
      })
      .pipe(
        map((data: Weather) => {
          this.weather = <Weather>data; // should be allowed by typescript now
          console.log(this.weather);
          return data;
        })
      );
    // .pipe(map((response) => console.log(response)))
    // .subscribe({
    //   next: (weath) => console.log(weath),
    //   error: (err) => console.log(err),
    //   complete: () => console.log('weather complete'),
    // });
    // this.weather = this.http.get(this.WEATHERURL).subscribe({
    //   next: (weather) => console.log(weather),
    //   error: (err) => console.log(err),
    //   complete: () => console.log('complete'),
    // });
    // console.log(this.weather);
  }

  constructor(private http: HttpClient) {}
  getMemes(): Observable<Memes[]> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<Memes[]>(this.MEMEURL, {
      headers: header,
      responseType: 'json',
    });
  }

  getPosts() {
    let params = new HttpParams().set('userId', '1');
    let headers = new HttpHeaders().set('Authorization', 'auth-token');

    this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts', { params });
    console.log(
      this.posts.subscribe({
        next: (post) => console.log(post),
        error: (err) => console.log(err),
        complete: () => console.log('finished'),
      })
    );
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

// this.memes = this.http
//   .get<HttpResponse<Memes>>(this.MEMEURL, {
//     headers: header,
//     responseType: 'json',
//   })
//   .pipe(
//     map((item) => {
//       let data = item.ameme.data.memes[0];
//       console.log(item);
//     })
//   )
//   .subscribe({
//     next: (meme) => {
//       console.log(meme);
//     },
//     error: (err) => console.log(err),
//     complete: () => console.log('complete'),
//   });

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
