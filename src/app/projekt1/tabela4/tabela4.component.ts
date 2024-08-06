import { Component } from '@angular/core';
import { Tabela41 } from '../tabela4-1';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tabela4',
  templateUrl: './tabela4.component.html',
  styleUrls: ['./tabela4.component.scss']
})
export class Tabela4Component {
  model = new Tabela41();


  constructor(private _location: Location) { }


  ngOnInit() {
    this.defaultData();
  }

  back() {
    this._location.back();
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

    this.model.E[33] = this.model.D[33] * this.model.E[5];
    this.model.G[33] = this.model.F[33] * this.model.G[5];

    for (let i = 34; i < 57; i++)
    {
      this.model.E[i] = this.model.D[i-1] * this.model.E[5];
      this.model.G[i] = this.model.F[i-1] * this.model.G[5];
    }
    for (let i = 33; i < 57; i++)
    {
      
      this.model.H[i] = Math.min(this.model.E[i], this.model.I[i-1]+this.model.C[i]);
      this.model.I[i] = this.model.I[i-1] + this.model.C[i] - this.model.H[i];
      this.model.J[i] = this.model.I[i]/this.model.E[i+1];

      this.model.K[i] = Math.min(this.model.G[i], this.model.L[i-1]+this.model.C[i]);
      this.model.L[i] = this.model.L[i-1] + this.model.C[i] - this.model.K[i];
      this.model.M[i] = this.model.L[i]/this.model.G[i+1];
    }

    for (let i = 33; i < 57; i++)
    {
        this.model.N[i] = (this.model.J[i] > 0 ? 
          0 :
          this.LQ(this.model.C[i], this.model.E[5], this.model.D[i]) * this.model.Q[5]);
        this.model.N[i] = this.model.N[i] / this.model.C[i];
        
        this.model.P[i] = (this.model.M[i] > 0 ? 
          0 :
          this.LQ(this.model.C[i], this.model.G[5], this.model.F[i]) * this.model.Q[5]);
        this.model.Q[i] = this.model.P[i] / this.model.C[i];
    }

    for (let i = 33; i < 57; i++)
    {
      this.model.R[i] = Math.max(this.model.J[i], this.model.M[i]) + this.model.O[i] + this.model.Q[i];
    }

    this.model.U[7] = (this.model.U[5]-1)/this.model.E[5];
    this.model.U[8] = (this.model.U[6]-1)/this.model.G[5];

    this.model.I[57] = 0;
    this.model.L[57] = 0;
    this.model.I[59] = this.model.J[33];
    this.model.L[59] = this.model.M[33];
    var sumC = 0;
    for (let i = 33; i < 57; i++)
    {
      this.model.I[57]+=this.model.I[i]
      this.model.L[57]+=this.model.L[i]
      sumC += this.model.C[i];

      if (this.model.J[i] > this.model.I[59]) this.model.I[59] = this.model.J[i];
      if (this.model.M[i] > this.model.L[59]) this.model.L[59] = this.model.M[i];
    }
    this.model.I[58] = this.model.I[57]/sumC;
    this.model.L[58] = this.model.L[57]/sumC;

    

  }

  maxR(){
    var max = this.model.R[33];
    for (let i = 33; i < 57; i++)
      if (this.model.R[i] > max) max = this.model.R[i];

    return max;
  }

  minR(){
    var min = this.model.R[33];
    for (let i = 33; i < 57; i++)
      if (this.model.R[i] < min) min = this.model.R[i];

    return min;
  }


  defaultData() {
    this.model.C[33] = 3.23;
    this.model.C[34] = 2.39;
    this.model.C[35] = 2.14;
    this.model.C[36] = 1.83;
    this.model.C[37] = 1.70;
    this.model.C[38] = 1.67;
    this.model.C[39] = 1.80;
    this.model.C[40] = 2.96;
    this.model.C[41] = 5.66;
    this.model.C[42] = 9.25;
    this.model.C[43] = 12.15;
    this.model.C[44] = 13.25;
    this.model.C[45] = 12.25;
    this.model.C[46] = 10.52;
    this.model.C[47] = 9.44;
    this.model.C[48] = 9.73;
    this.model.C[49] = 10.29;
    this.model.C[50] = 10.10;
    this.model.C[51] = 9.34;
    this.model.C[52] = 8.57;
    this.model.C[53] = 7.61;
    this.model.C[54] = 6.33;
    this.model.C[55] = 5.08;
    this.model.C[56] = 4.08;

    this.model.D[33] = 4;
    this.model.D[34] = 4;
    this.model.D[35] = 4;
    this.model.D[36] = 4;
    this.model.D[37] = 4;
    this.model.D[38] = 4;
    this.model.D[39] = 4;
    this.model.D[40] = 7;
    this.model.D[41] = 7;
    this.model.D[42] = 7;
    this.model.D[43] = 7;
    this.model.D[44] = 7;
    this.model.D[45] = 7;
    this.model.D[46] = 7;
    this.model.D[47] = 7;
    this.model.D[48] = 7;
    this.model.D[49] = 7;
    this.model.D[50] = 7;
    this.model.D[51] = 7;
    this.model.D[52] = 4;
    this.model.D[53] = 4;
    this.model.D[54] = 4;
    this.model.D[55] = 4;
    this.model.D[56] = 4;

    this.model.F[33] = 6;
    this.model.F[34] = 6;
    this.model.F[35] = 6;
    this.model.F[36] = 8;
    this.model.F[37] = 8;
    this.model.F[38] = 8;
    this.model.F[39] = 8;
    this.model.F[40] = 8;
    this.model.F[41] = 8;
    this.model.F[42] = 8;
    this.model.F[43] = 8;
    this.model.F[44] = 6;
    this.model.F[45] = 6;
    this.model.F[46] = 6;
    this.model.F[47] = 6;
    this.model.F[48] = 6;
    this.model.F[49] = 6;
    this.model.F[50] = 6;
    this.model.F[51] = 6;
    this.model.F[52] = 6;
    this.model.F[53] = 6;
    this.model.F[54] = 6;
    this.model.F[55] = 6;
    this.model.F[56] = 6;

    this.model.E[5] = 1.262;
    this.model.G[5] = 1.374;
    this.model.Q[5] = 0.5;

    this.model.U[5] = 4;
    this.model.U[6] = 4;

    this.model.H[32] = 5.05;
    this.model.I[32] = 20.58;
    this.model.J[32] = 4.08;
    this.model.K[32] = 8.24;
    this.model.L[32] = 7.81;
    this.model.M[32] = 0.95;

    this.model.E[57] = 5.05;
    this.model.G[57] = 8.24;
    this.onSubmit();
  }
}
