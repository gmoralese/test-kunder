import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../classes/product';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BannerService {
  public api = 'https://hack.kunderlabs.com/exam/telecom/api/products/new';

  constructor(private http: HttpClient) { }

  public getBannerData(): Observable<Product> {
    return this.http.get<Product>(this.api)
      .pipe(catchError(this.errorHandler));
  }

  public errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrió un error:', error.error.message);
    } else {
      console.error(
        `La API retornó: ${error.status}`);
    }

    return throwError(
      'Intente en unos minutos :(');
  }
}
