import { Component } from '@angular/core';

@Component({
  selector: 'app-usprawnienie-planowania-zabiegow',
  templateUrl: './usprawnienie-planowania-zabiegow.component.html',
  styleUrls: ['./usprawnienie-planowania-zabiegow.component.scss']
})
export class UsprawnieniePlanowaniaZabiegowComponent {

  krok = 1;
  przewidywanyCzas = "2 godziny";
  komunikat1 = "Zwiększ dostępność łóżek!";
  lekarze = "75%"
  pielegniarki = "40%"
  lozka = "85% (osiągnięta wartość krytyczną)"

  setKrok(_krok : number)
  {
    this.krok = _krok;
  }
}
