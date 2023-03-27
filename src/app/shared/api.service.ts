import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters } from '../ventas/interfaces/api-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) { }


 getCharacters():Observable<Characters> {
   const url = 'https://rickandmortyapi.com/api/character'
   return this.http.get<Characters>(url)
 }
}


