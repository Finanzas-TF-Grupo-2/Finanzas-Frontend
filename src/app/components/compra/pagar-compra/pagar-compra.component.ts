import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CompraServiceService } from '../../../service/compra/compra-service.service';
import { PagoDialogComponent } from '../../pago/pago-dialog/pago-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { formatDate } from '@angular/common';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-pagar-compra',
  templateUrl: './pagar-compra.component.html',
  styleUrl: './pagar-compra.component.css'
})
export class PagarCompraComponent implements OnInit{

  persona: any;
  compras: any[] = [];
  filteredCompras: any[] = [];
  selectedMonth: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private compraService: CompraServiceService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(){
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

  /*filterByDate() {
    if (this.selectedDate) {
      const formattedDate = formatDate(this.selectedDate, 'yyyy-MM-dd', 'en-US');
      this.filteredCompras = this.compras.filter(compra =>
        compra.fechaCompra.startsWith(formattedDate)
      );
    } else {
      this.filteredCompras = this.compras;
    }
  }*/

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

  openPagoDialog(compra: any): void {
    const dialogRef = this.dialog.open(PagoDialogComponent, {
      width: '250px',
      data: { compra, montoFinal: 0 }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.compraService.pagarCompra(compra.id, result).subscribe(response => {
          console.log('Compra pagada:', response);
          /*if(compra.pagoEnCuotas){
            compra.numeroCuotas--;
          }*/
          this.snackBar.open('Compra pagada con éxito', 'Cerrar', { duration: 3000 });
          this.ngOnInit(); // Refresh the list
        });
      }
    });
  }
}
