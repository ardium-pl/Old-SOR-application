import { Component } from '@angular/core';
import { Tabela21 } from '../tabela2-1';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tabela2',
  templateUrl: './tabela2.component.html',
  styleUrls: ['./tabela2.component.scss']
})
export class Tabela2Component {
  model = new Tabela21("Mnożenie");
  submitted = false;

  constructor(private _location: Location) { }

  back() {
    this._location.back();
  }

  ngOnInit() {
    this.defaultData();
  }

  wylicz(): void {
    alert("Wyliczam")
  }

  onSubmit() { 
    

    for (let i = 17 ; i < 23; i++) 
    {
      this.model.F[i] = Math.min(this.model.D[i] + this.model.G[i-1], this.model.E[i])
      this.model.G[i] = this.model.D[i] - this.model.F[i] + this.model.G[i-1]
    }

    this.model.D[23] = 0
    this.model.E[23] = 0
    for (let i = 17 ; i < 23; i++) 
    {
      this.model.D[23]+=this.model.D[i];
      this.model.E[23]+=this.model.E[i];
    }


    var sum = 0;
    for (let i = 17 ; i < 23; i++) 
      sum += this.model.G[i];

      this.model.I[18] = sum/6.0;
      this.model.I[21] = this.model.G[19]/7.0*60.0;
      this.model.I[23] = sum/this.model.D[23]*60.0

  }

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

  defaultData() {
    this.model.D[17] = 10;
    this.model.D[18] = 8;
    this.model.D[19] = 8;
    this.model.D[20] = 6;
    this.model.D[21] = 5;
    this.model.D[22] = 4;

    for (let i = 17 ; i < 23; i++) 
      this.model.E[i] = 7;

    this.onSubmit();
  }
}
