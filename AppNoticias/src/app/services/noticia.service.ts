import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {



  constructor(
    private http: HttpClient
  ) { }

  getNews(params: any): Observable<any> {
    console.log(params)
    const url = `https://newsapi.org/v2/top-headlines?country=${params.country}&category=${params.category}&apiKey=bd05f4e10c7147688c025015db780364`

    return this.http.get(url);

  }
}
