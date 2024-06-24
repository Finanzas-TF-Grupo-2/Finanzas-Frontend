import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraServiceService {

  private apiUrl = 'https://credibarrio.zeabur.app/api/compra';
  private apiUrlP = 'https://credibarrio.zeabur.app/api/producto';
  private apiUrlPer = 'https://credibarrio.zeabur.app/api/persona';

  constructor(private http: HttpClient) {}

  agregarCompra(compra: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, compra);
  }

  getComprasByPersonaId(personaId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/persona/${personaId}`);
  }

  pagarCompra(compraId: number, montoFinal: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${compraId}/pagar`, { montoFinal });
  }
  getAllProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlP}/productos`);
  }
  getClientbyId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrlPer}/${id}`);
  }

}
