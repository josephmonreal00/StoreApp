import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class Shoes {
  ebay: any;
  constructor(private http: HttpClient) {
    this.ebay = http.get(
      'https://api.ebay.com/commerce/catalog/v1_beta/product/232669172',
      {
        headers: { Accept: 'application/json' },
        observe: 'response',
        //params:
      }
    );
  }
}
