import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelServiceService {

  constructor() { }


  public exportAsExcelFile(data: any[], fileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, fileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });

    // Verificar si navigator.msSaveBlob está definido para Internet Explorer y Edge
    if ((navigator as any).msSaveBlob) {
      (navigator as any).msSaveBlob(data, fileName + EXCEL_EXTENSION);
    } else {
      // Para otros navegadores
      const anchor = document.createElement('a');
      anchor.href = window.URL.createObjectURL(data);
      anchor.download = fileName + EXCEL_EXTENSION;
      anchor.click();
      window.URL.revokeObjectURL(anchor.href);
    }
  }
}

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
