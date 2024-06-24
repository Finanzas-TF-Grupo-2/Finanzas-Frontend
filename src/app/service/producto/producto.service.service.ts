import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  private baseUrl = 'https://credibarrio.zeabur.app/api/producto';

  constructor(private http: HttpClient) { }

  addProducto(producto:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, producto);
  }

  getAllProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/productos`);
  }

  deleteProducto(productId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${productId}`);
  }
}
