import { Component } from '@angular/core';
import { Pacjent } from '../pacjent';

@Component({
  selector: 'app-panel-pacjenta',
  templateUrl: './panel-pacjenta.component.html',
  styleUrls: ['./panel-pacjenta.component.scss']
})
export class PanelPacjentaComponent {

  krok = 0;
  pacjent: Pacjent;

  kolor = "żółty"
  czasOczekiwania = "do 20 min"
  wKolejce = "4 osoby"

  setKrok(_krok : number)
  {
    this.krok = _krok;
  }
}
