import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompraServiceService } from '../../../service/compra/compra-service.service';
import { ClientServiceService } from '../../../service/client-service/client-service.service';
import { ExcelServiceService } from '../../../service/excel/excel-service.service';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-cliente-resumen',
  templateUrl: './cliente-resumen.component.html',
  styleUrl: './cliente-resumen.component.css'
})
export class ClienteResumenComponent implements OnInit{
  persona: any;
  compras: any[] = [];
  filteredCompras: any[] = [];
  selectedMonth: Date = new Date();
 // displayedColumnsCompras: string[] = ['producto', 'fechaCompra', 'montoFinal', 'paid'];

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
        this.filteredCompras = compras;
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

  filterByMonth(date: Date) {
    if (date) {
      const selectedMonth = date.getMonth();
      const selectedYear = date.getFullYear();

      this.filteredCompras = this.compras.filter(compra => {
        const compraDate = new Date(compra.fechaCompra);
        return compraDate.getMonth() === selectedMonth && compraDate.getFullYear() === selectedYear;
      });
    } else {
      this.filteredCompras = this.compras;
    }
  }

  chosenYearHandler(selectedYear: Date, datepicker: MatDatepicker<any>) {
    const valueYear = this.selectedMonth || new Date();
    valueYear.setFullYear(selectedYear.getFullYear());
    this.selectedMonth = valueYear;
  }

  chosenMonthHandler(Month: Date, datepicker: MatDatepicker<any>) {
    const valueMonth = this.selectedMonth || new Date();
    valueMonth.setMonth(Month.getMonth());
    this.selectedMonth = valueMonth;
    this.filterByMonth(this.selectedMonth);
    datepicker.close();
  }

}
