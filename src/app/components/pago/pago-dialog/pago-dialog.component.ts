import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pago-dialog',
  templateUrl: './pago-dialog.component.html',
  styleUrl: './pago-dialog.component.css'
})
export class PagoDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<PagoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onPagar(): void {
    this.dialogRef.close(this.data.montoFinal);
  }

}
