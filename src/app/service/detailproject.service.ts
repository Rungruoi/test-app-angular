import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DetailprojectService {

  constructor( private http: HttpClient) { }

  private Detail = 'http://localhost:8000/api/project';

  detail(id)
  {
    return this.http.get<any>(`${this.Detail}/${id}/list-member`);
  }
}
