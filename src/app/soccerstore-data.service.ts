import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Soccerwear } from './soccer-list/Soccerwear';

const URL = 'https://667b1cefbd627f0dcc91bc0b.mockapi.io/soccerwears';

@Injectable({
  providedIn: 'root'
})
export class SoccerstoreDataService {

  constructor(private http: HttpClient) { }

  /**
   * Consume la API de soccerwears y devuelve un observable a la respuesta.
   */
  public getAll(): Observable<Soccerwear[]> {
    //fetch('url', {method: 'GET'})
    return this.http.get<Soccerwear[]>(URL)
              .pipe(
                tap((soccerwears: Soccerwear[]) => soccerwears.forEach(soccerwear => soccerwear.quantity = 0))
              );
  }
}
