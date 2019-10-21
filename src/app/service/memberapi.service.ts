import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberapiService {

  constructor( private http: HttpClient ) { }

  private ApiUrl='http://localhost:8000/api/member';

  getMember()
  {
    return this.http.get(`${this.ApiUrl}`);
  }
  addMember(data)
  {
    return this.http.post<any>(`${this.ApiUrl}/add`,data);
  }
}
