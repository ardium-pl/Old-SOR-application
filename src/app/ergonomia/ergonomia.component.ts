import { Component } from '@angular/core';

@Component({
  selector: 'app-ergonomia',
  templateUrl: './ergonomia.component.html',
  styleUrls: ['./ergonomia.component.scss']
})
export class ErgonomiaComponent {

  widok = 1
  radio1:  number ;  
  radio2:  number ;  
  radio3:  number ;  
  clicked1: boolean = false;
  clicked2: boolean = false;
  clicked3: boolean = false;
  clicked4: boolean = false;
  clicked5: boolean = false;
  clicked6: boolean = false;
  clicked7: boolean = false;
  clicked8: boolean = false;
  setClicked1()
  {
    this.clicked1 = true;
  }
  setClicked2()
  {
    this.clicked2 = true;
  }
  setClicked3()
  {
    this.clicked3 = true;
  }
  setClicked4()
  {
    this.clicked4 = true;
  }
  setClicked5()
  {
    this.clicked5 = true;
  }
  setClicked6()
  {
    this.clicked6 = true;
  }
  setClicked7()
  {
    this.clicked7 = true;
  }
  setClicked8()
  {
    this.clicked8 = true;
  }
  setView(_view: number)
  {
    this.widok = _view;
  }

  savePDF(id: number) {
    const pdfName = this.getPDFNameForSelection(id);
    const link = document.createElement('a');
    link.href = `../../assets/${pdfName}.pdf`;
    link.download = `${pdfName}.pdf`;
    link.click();
  }

  getPDFNameForSelection(selection: number): string {
    switch (selection) {
      case 1:
        return 'OB_Miejsce pracy';
      case 2: 
        return 'OB_Bezpieczna obsługa i przemieszczanie pacjentów'
      case 3:
        return 'RZ_Miejsce pracy'
      case 4:
        return 'RZ_Bezpieczna obsługa i przemieszczanie pacjentów'  
      default:
        return 'pdfFile';
    }
  }
}
