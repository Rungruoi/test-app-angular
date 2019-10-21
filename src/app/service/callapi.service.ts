import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  constructor( private http: HttpClient ) { }

  private ApiUrl='http://localhost:8000/api';

  get()
  {
    return this.http.get(`${this.ApiUrl}/project`);            
  }
  getProject(id)
  {
    return this.http.get<any>(`${this.ApiUrl}/project/${id}`);
  }
  editProject(id, data)
  {
    return this.http.put<any>(`${this.ApiUrl}/project/${id}/edit`, data);
  }
  addProject(data)
  {
    return this.http.post<any>(`${this.ApiUrl}/project/add`,data);
  }
  removeProject(id)
  {
    return this.http.delete<any>(`${this.ApiUrl}/project/${id}/delete`);
  }
}