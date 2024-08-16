import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { sendEmail as sendEmailUtil } from '../utils/mailTo.util';
import { printPdf as printPdfUtil } from '../utils/print.util';
import { ErgonomiaPracyComponent } from '../ergonomia-pracy/ergonomia-pracy.component';

@Component({
  selector: 'app-dialog-text',
  templateUrl: './dialog-text.component.html',
})
export class DialogTextComponent {
  message: string = ""
  cancelButtonText = "Cancel"
  selection: number;
  buttons = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.message = data.message;
    this.selection = data.selection;
    this.buttons = data.buttons;
    this.cancelButtonText = data.buttonText.cancel;
  }

  savePdf() {
    const pdfName = this.getPdfNameForSelection(this.selection);
    const link = document.createElement('a');
    link.href = `../../assets/${pdfName}.pdf`;
    link.download = `${pdfName}.pdf`;
    link.click();
  }

  getPdfNameForSelection(selection: number): string {
    switch (selection) {
      case 1:
        return 'LK_Przechowywanie i obsługa materiałów';
      case 2: 
        return 'LK_Bezpieczeństwo maszyn i narzędzi ręcznych'
      case 3:
        return 'LK_Bezpieczna obsługa pacjenta'
      case 4:
        return 'LK_Stanowiska pracy'
      case 5:
        return 'LK_Środowisko fizyczne'
      case 6:
        return 'LK_Substancje i środki niebezpieczne'
      case 7:
        return 'LK_Kontrola zakażeń'
      case 8:
        return 'LK_Zaplecze socjalne'  
      case 9:
        return 'LK_Gotowość'
      case 10:
        return 'LK_Organizacja pracy i bezpieczeństwo pacjentów'  
      default:
        return 'pdfFile';
    }
  }

  // Tu trzeba jeszcze zrobić serwer bo to nie jest takie proste
  // Jest straszny syf w nazewnictwie
  sendEmail(){
    sendEmailUtil();
  }

  printPdf(){
    const pdfName = this.getPdfNameForSelection(this.selection);
    const pdfPath = `../../assets/${pdfName}.pdf`;
    printPdfUtil(pdfPath);
  }
}