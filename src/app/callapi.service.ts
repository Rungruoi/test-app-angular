import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  constructor( private http: HttpClient ) { }

  private ApiUrl='http://localhost:8000/api';

  getAll(): Observable <any>{
    return this.http.get<any[]>('http://localhost:8000/api/');            
  }
}
