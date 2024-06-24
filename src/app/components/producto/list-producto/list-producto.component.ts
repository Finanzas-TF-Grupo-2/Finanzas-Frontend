import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from '../../../service/producto/producto.service.service';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrl: './list-producto.component.css'
})
export class ListProductoComponent {
  productos: any[] = [];
  displayedColumns: string[] = ['nombre', 'costo', 'acciones'];

  constructor(private productoService: ProductoServiceService) {}

  ngOnInit() {
    this.cargarProductos();
  
  }

  cargarProductos() {
    this.productoService.getAllProductos().subscribe(
      (data: any[]) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

  borrarProducto(productId: number) {
    this.productoService.deleteProducto(productId).subscribe(
      () => {
        console.log('Producto borrado');
        this.cargarProductos(); 
      },
      (error) => {
        console.error('Error al borrar el producto:', error);
      }
    );
  }
}
