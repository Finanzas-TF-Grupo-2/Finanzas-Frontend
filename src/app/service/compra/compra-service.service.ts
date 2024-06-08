import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraServiceService {

  private apiUrl = 'http://localhost:8080/api/compra';
  private apiUrlP = 'http://localhost:8080/api/producto';

  constructor(private http: HttpClient) {}

  agregarCompra(compra: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, compra);
  }

  getComprasByPersonaId(personaId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/persona/${personaId}`);
  }

  pagarCompra(compraId: number, monto: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${compraId}/pagar`, { monto });
  }
  getAllProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrlP}/productos`);
  }
}
