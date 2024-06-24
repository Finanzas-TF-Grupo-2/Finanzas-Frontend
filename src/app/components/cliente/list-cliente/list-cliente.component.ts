import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ClientServiceService } from '../../../service/client-service/client-service.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrl: './list-cliente.component.css'
})
export class ListClienteComponent {
  
  personas: any = [];
  displayedColumns: string[] = ['nombre', 'apellido','email', 'telefono', 'acciones'];

  constructor(private personaService: ClientServiceService, private router: Router) {}

  ngOnInit() {
    this.personaService.getPersonas().subscribe(data => {
      this.personas = data;
    });
  }

  agregarCompra(persona: any) {
    this.router.navigate(['/compras'], {state: {persona}});
  }

  verCompras(persona: any) {
    this.router.navigate(['/pagar-compra', persona.id]);
  }

  verReporte(persona: any) {
    this.router.navigate(['/cliente-resumen', persona.id]);
  }

}
