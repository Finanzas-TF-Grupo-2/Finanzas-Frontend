import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CompraServiceService } from '../../../service/compra/compra-service.service';

@Component({
  selector: 'app-add-compra',
  templateUrl: './add-compra.component.html',
  styleUrl: './add-compra.component.css'
})
export class AddCompraComponent implements OnInit{
  
  persona: any;
  productos:any [] = [];
  compra = {   
    producto: {
      id:null,
      nombre: '',
      costo: 0,
    },
    pagoEnCuotas: false,
    numeroCuotas: 0,
    fechaCompra: '', 
    montoFinal: 0
  };

  constructor(
    private router: Router,
    private compraService: CompraServiceService
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && navigation.extras.state['persona']) {
      this.persona = navigation.extras.state['persona'];
    }
  }

  ngOnInit() {
    this.compraService.getAllProductos().subscribe(
      (data: any[]) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

  onProductoChange(productoId: number) {
    const selectedProducto = this.productos.find(producto => producto.id === productoId);
    if (selectedProducto) {
      this.compra.producto = selectedProducto;
    }
  }

  agregarCompra()  {
    const compraConPersona = { ...this.compra, persona: this.persona };
    this.compraService.agregarCompra(compraConPersona).subscribe(
      response => {
        console.log('Compra agregada:', response);
        this.router.navigate(['/clientes']);
      },
      error => {
        console.error('Error al agregar la compra:', error);
      }
    );
  }

}
