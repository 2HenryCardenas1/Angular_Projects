import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  key = '5ce464012d0deb3c60a04555ad6c619a';
  url = `https://api.openweathermap.org/data/2.5/weather?`

  constructor(private httpClient: HttpClient) { }



  getWeather(city: string): Observable<any> {
    const URL = `${this.url}q=${city}&appid=${this.key}`;
    return this.httpClient.get(URL);
  }
}
