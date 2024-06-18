import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompraServiceService } from '../../../service/compra/compra-service.service';
import { ClientServiceService } from '../../../service/client-service/client-service.service';
import { ExcelServiceService } from '../../../service/excel/excel-service.service';

@Component({
  selector: 'app-cliente-resumen',
  templateUrl: './cliente-resumen.component.html',
  styleUrl: './cliente-resumen.component.css'
})
export class ClienteResumenComponent implements OnInit{
  persona: any;
  compras: any[] = [];
  displayedColumnsCompras: string[] = ['producto', 'fechaCompra', 'montoFinal', 'paid'];

  constructor(
    private route: ActivatedRoute,
    private compraService: CompraServiceService,
    private personaService: ClientServiceService,
    private excelService: ExcelServiceService
  ) {}

  ngOnInit() {
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

  exportToExcel(): void {
    const exportData = this.compras.map(compra => ({
      'Producto': compra.producto.nombre,
      'Fecha de Compra': new Date(compra.fechaCompra).toDateString(),
      'Precio': compra.montoFinal,
      'Estado': compra.montoFinal = 0 ? 'Por Pagar' : 'Pagado'
    }));
    
    const personaData = [{
      'Nombres': this.persona.nombre,
      'Apellidos': this.persona.apellido,
      'Porcentaje de Tasa': this.persona.credito.porcentajeTasa,
      'Tipo de Tasa': this.persona.credito.tipoTasa,
      'Saldo Disponible': this.persona.credito.saldo
    }];
    
    this.excelService.exportAsExcelFile([...personaData, ...exportData], 'Resumen_Cliente');
  }

}
