import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoServiceService } from '../../../service/producto/producto.service.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrl: './add-producto.component.css'
})
export class AddProductoComponent {
  producto = {
    nombre: '',
    costo: 0,
    
  };

  constructor(
    private router: Router,
    private productoService: ProductoServiceService
  ) {}


  agregarProducto(){
    this.productoService.addProducto(this.producto).subscribe(
      response => {
        console.log('Producto agregado:', response);
        this.router.navigate(['/productos']);
      },
      error => {
        console.error('Error al agregar el producto:', error);
      }
    );
  }

}


