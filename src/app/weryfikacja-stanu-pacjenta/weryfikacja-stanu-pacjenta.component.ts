import { Component } from '@angular/core';
import { Pacjent, TypPacjenta } from '../pacjent';
import { DialogTextComponent } from '../dialog-text/dialog-text.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-weryfikacja-stanu-pacjenta',
  templateUrl: './weryfikacja-stanu-pacjenta.component.html',
  styleUrls: ['./weryfikacja-stanu-pacjenta.component.scss']
})
export class WeryfikacjaStanuPacjentaComponent {

  model = new Pacjent(1, 0,  "Karolina", "Bułka", new Date(1957, 8, 9));
  pobrano = false;
  typ : TypPacjenta;
  typy = [
    { text: 'Resuscytacja', value: TypPacjenta.Resuscytacja },
    { text: 'Stan zagrożenia życia', value: TypPacjenta.ZagrozenieZycia },
    { text: 'Pilny przypadek ostry', value: TypPacjenta.PilnyOstry },
    { text: 'Pilny przypadek nieostry', value: TypPacjenta.PilnyNieostry },
    { text: 'Niepilny', value: TypPacjenta.Niepilny }
  ];
  wstaw()
  {
    this.model.pesel = 57080920704;
  }
  przetworz()
  {
    this.openAlertDialog("Typ pacjenta: pilny przypadek – nieostry")
  }

  constructor(private dialog: MatDialog) {

  }

  inne = false;
  text1: string;
  text2: string;
  cb1: boolean;
  cb2: boolean;
  cb3: boolean;
  cb4: boolean;

  krok = 1;
  setKrok(krok:number)
  {
    this.krok = krok;
  }

  wyniki() {

    this.openAlertDialog('<img src="../../assets/wyniki.jpg">');
  }

  openAlertDialog(msg: string) {
    const dialogRef = this.dialog.open(DialogTextComponent,{
      data:{
        message: msg,
        buttonText: {
          cancel: 'Ok'
        }
      },
    });
  }


  pobierz(){
    this.pobrano=true;

  }
}
