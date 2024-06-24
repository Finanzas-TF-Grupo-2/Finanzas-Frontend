import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { ClientServiceService } from '../../../service/client-service/client-service.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  persona = {
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: '',
    correo: '',
    dni: '',
    credito: {
      frecuenciaPago: '',
      diaPago: 0,
      capitalizacion: '',
      tipoTasa: '',
      porcentajeTasa: 0,
      saldo: 0
    },
    compras: []
  };
  

  constructor(private personaService: ClientServiceService, private router: Router) {}

  ngOnInit() {}

  onTipoTasaChange() {
    if (this.persona.credito.tipoTasa === 'efectiva') {
      this.persona.credito.capitalizacion = '';
    }
  }

  onSubmit() {
    this.personaService.registerPersona(this.persona).subscribe(response => {
      console.log('Persona creada:', response);
      this.router.navigate(['/home']);
    });
  }

}
