import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL: string = 'https://rickandmortyapi.com/api';
  private httpClient = inject(HttpClient)

  getCharacters(apiUrl: string = `${this.BASE_URL}/character`): Observable<any> {
    return this.httpClient.get(apiUrl).pipe(share())
  }
}
