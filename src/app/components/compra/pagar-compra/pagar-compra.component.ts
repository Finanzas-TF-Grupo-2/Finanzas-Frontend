import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CompraServiceService } from '../../../service/compra/compra-service.service';
import { PagoDialogComponent } from '../../pago/pago-dialog/pago-dialog.component';

@Component({
  selector: 'app-pagar-compra',
  templateUrl: './pagar-compra.component.html',
  styleUrl: './pagar-compra.component.css'
})
export class PagarCompraComponent {

  persona: any;
  compras: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private compraService: CompraServiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(){
    this.route.params.subscribe(params => {
      const personaId = params['id'];
      this.compraService.getClientbyId(personaId).subscribe(persona => {
        this.persona = persona;
      });
      this.compraService.getComprasByPersonaId(personaId).subscribe(compras => {
        this.compras = compras;
      });
    });
  }

  openPagoDialog(compra: any): void {
    const dialogRef = this.dialog.open(PagoDialogComponent, {
      width: '250px',
      data: { compra, montoFinal: 0 }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.compraService.pagarCompra(compra.id, result).subscribe(response => {
          console.log('Compra pagada:', response);
          this.ngOnInit(); // Refresh the list
        });
      }
    });
  }
}
