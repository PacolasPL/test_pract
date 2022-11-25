import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/environment';
import { Serie } from './serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private url:string = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getSeries(): Observable<Serie[]>{
    return this.http
    .get<Serie[]>(this.url);
  }



}
