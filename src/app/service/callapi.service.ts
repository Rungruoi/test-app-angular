import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  constructor( private http: HttpClient ) { }

  private ApiUrl='http://localhost:8000/api/admin';

  get()
  {
    return this.http.get(`${this.ApiUrl}/project`);            
  }
  editProject(id,data)
  {
    return this.http.put<any>(`${this.ApiUrl}/project/${id}`, data);
  }

  getMember()
  {
    return this.http.get(`${this.ApiUrl}/admin/member`);
  }
}