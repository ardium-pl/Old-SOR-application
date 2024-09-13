import { Component } from '@angular/core';
import { Tabela31 } from '../tabela3-1';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tabela3',
  templateUrl: './tabela3.component.html',
  styleUrls: ['./tabela3.component.scss']
})
export class Tabela3Component {
  model = new Tabela31();
  submitted = false;

  constructor(private _location: Location) { }


  ngOnInit() {
    this.defaultData();
  }

  back() {
    this._location.back();
  }
  wylicz(): void {
    alert("Wyliczam")
  }

  LQ(Arrival_Rate: number, Service_Rate: number, Servers: number)
  {
    var Lq, sum = 0, term = 1;
    let rho = Arrival_Rate / (Servers * Service_Rate)
    if (rho >= 1) 
      return -1;

      for (let n = 0; n < Servers - 1; n++)
      {
        sum += term;
        term *= (Arrival_Rate / Service_Rate) / (n + 1)
      }
      Lq = (term * rho) / ((1 - rho) ^ 2) *  (1 / (sum + (term / (1 - rho))));

    return Lq;
  }

  onSubmit() { 
    
    this.model.H[9] = 1.0/this.model.H[6];
    this.model.H[11] = 1.0/this.model.H[7];
    this.model.H[13] = this.model.H[10]/this.model.H[9];
    this.model.H[14] = this.model.H[12]/this.model.H[11];

    if (this.model.H[6]/this.model.H[7]/this.model.H[8] <= 1)
      this.model.H[15] = this.model.H[6]/this.model.H[7]/this.model.H[8] * 100.0
    else
    this.model.H[15] = -1;

    this.model.L[11] = this.LQ(this.model.H[6], this.model.H[7], this.model.H[8]);
    this.model.L[12] = (this.model.H[13]*this.model.H[13]+this.model.H[14]*this.model.H[14])/2;
    this.model.L[13] = this.model.L[11] * this.model.L[12];

    this.model.H[18] = this.model.L[13]/this.model.H[6];

  }

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

  defaultData() {
    this.model.H[6] = 9.25;
    this.model.H[7] = 1.37;
    this.model.H[8] = 8;
    this.model.H[10] = 0.1;
    this.model.H[12] = 0.5;

    this.onSubmit();
  }
}
