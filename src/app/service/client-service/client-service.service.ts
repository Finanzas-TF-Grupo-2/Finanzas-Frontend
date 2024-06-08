import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private apiUrl = 'http://localhost:8080/api/persona';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getPersonas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'/personas');
  }

  registerPersona(persona: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, persona);
  }
}
