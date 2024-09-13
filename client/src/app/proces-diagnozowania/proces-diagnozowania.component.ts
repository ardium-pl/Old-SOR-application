import { Component } from '@angular/core';

import { Pacjent } from '../pacjent';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-proces-diagnozowania',
  templateUrl: './proces-diagnozowania.component.html',
  styleUrls: ['./proces-diagnozowania.component.scss']
})
export class ProcesDiagnozowaniaComponent {
  
  pacjenci: Array<Pacjent>;

  wybrany: Pacjent;
  dataSource: MatTableDataSource<Pacjent>;
  
  columnsToDisplay = ['id', 'pesel', 'imie', 'nazwisko', 'dataUrodzenia'];

  czyRozwiniete1: boolean = false;
  czyRozwiniete2: boolean = false;
  czyRozwiniete3: boolean = false;
  czyRozwiniete4: boolean = false;

  ngOnInit()
  {
    this.pacjenci = new Array<Pacjent>();
    this.pacjenci.push(new Pacjent(1, 71120136298, "Jan", "Bąk", new Date(1971,12, 1)));
    this.pacjenci.push(new Pacjent(2, 58100302373, "Julian", "Cygan", new Date(1958, 10, 3)));
    this.pacjenci.push(new Pacjent(3, 76022729665, "Alicja", "Dzik", new Date(1976, 2, 27)));
    this.pacjenci.push(new Pacjent(4, 67012641052, "Marcin", "Pająk", new Date(1967, 1, 26)));
    this.pacjenci.push(new Pacjent(5, 76032975524, "Maria", "Pęczak", new Date(1976, 3, 29)));

    this.dataSource = new MatTableDataSource<Pacjent>(this.pacjenci);
  }
  rozwin(ktore: number)
  {
    console.log("Rozwijam")
    switch(ktore)
    {
      case 1: this.czyRozwiniete1 = !this.czyRozwiniete1; break;
      case 2: this.czyRozwiniete2 = !this.czyRozwiniete2; break;
      case 3: this.czyRozwiniete3 = !this.czyRozwiniete3; break;
      case 4: this.czyRozwiniete4 = !this.czyRozwiniete4; break;
    }
  }

  setKrok(_krok : number)
  {
    this.krok = _krok;
  }

  idz (row: any)
  {
    console.log(row)
    this.wybrany = row;
    this.krok = 1
    console.log(this.wybrany)
    this.czyRozwiniete1 = false;
    this.czyRozwiniete2 = false;
    this.czyRozwiniete3 = false;
    this.czyRozwiniete4 = false;
  }

  onNgModelChange(_event: Event)
  {

  }
  krok = 0;
}
