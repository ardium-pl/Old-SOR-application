import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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

}