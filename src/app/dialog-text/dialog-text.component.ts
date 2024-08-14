import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { sendEmail } from '../utils/mailTo.util';

@Component({
  selector: 'app-dialog-text',
  templateUrl: './dialog-text.component.html'
})
export class DialogTextComponent {
  message: string = ""
  cancelButtonText = "Cancel"
  buttons = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DialogTextComponent>) {
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
      if (data.buttons)
      {
        this.buttons = true;
      }
    }
    //this.dialogRef.updateSize('300px','150px')
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  sendEmail(){
    sendEmail();
  }

  savePDF(index?: number): void {
    const link = document.createElement('a');
    switch(index){
      case 1:{
        link.href = '../../assets/pdfFile.PDF'; 
        link.download = 'pdfFile.pdf';
        link.click();
        break;
      }
      case 2:{
        link.href = '../../assets/pdfFile.PDF'; 
        link.download = 'pdfFile.pdf';
        link.click();
        break;
      }
      case 3:{
        link.href = '../../assets/pdfFile.PDF'; 
        link.download = 'pdfFile.pdf';
        link.click();
        break;
      }
      default:
        link.href = '../../assets/pdfFile.PDF'; 
        link.download = 'pdfFile.pdf';
        link.click();
        break;
    }
  }

}