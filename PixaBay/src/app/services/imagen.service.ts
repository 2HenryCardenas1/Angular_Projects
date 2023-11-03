import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  // variables
  private error$ = new Subject<string>();
  private terminoBusqueda$ = new Subject<string>();




  constructor(
    private http: HttpClient
  ) { }

  setError(msj: string) {
    this.error$.next(msj);

  }
  // getError, retorna un observable con el error
  getError(): Observable<string> {
    return this.error$.asObservable();
  }

  sendTerminoBusqueda(termino: string) {
    this.terminoBusqueda$.next(termino);
  }

  getTerminoBusqueda(): Observable<string> {
    //retornamos el valor del observable
    return this.terminoBusqueda$.asObservable();
  }

  getImages(termino: string,per_page:number,page:number): Observable<any> {
    const key = '33997307-58a6157a1d1e6af6a79252a41&q'
    const URL = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${per_page}&page=${page}`;
    return this.http.get(URL);
  }


}
