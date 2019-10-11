import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  BASE_URL = "https://api.exchangeratesapi.io/";
  latest = 'latest';

  constructor(private httpClient: HttpClient) { }

  callExchangeRate(): Observable<any> {
    return this.httpClient.get<any>(this.BASE_URL + this.latest);
  }
}
