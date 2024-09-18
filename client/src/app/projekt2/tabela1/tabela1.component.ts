import { Component } from '@angular/core';
import { Tabela11 } from '../tabela1-1';

@Component({
  selector: 'app-tabela1',
  templateUrl: './tabela1.component.html',
  styleUrls: ['./tabela1.component.scss']
})
export class Tabela1Component {

  model = new Tabela11("Odejmowanie");
  submitted = false;

  constructor() { }


  ngOnInit() {
    this.defaultData();
  }

  wylicz(): void {
    alert("Wyliczam")
  }

  defaultData() {
    this.model.D[4] = 51000;
    this.model.D[6] = Math.round(this.model.D[4] / 365);

    this.model.C[11] = 2;
    this.model.C[12] = 1.48292563634017;
    this.model.C[13] = 1.32804380166974;
    this.model.C[14] = 1.13240358945445;
    this.model.C[15] = 1.05428336582682;
    this.model.C[16] = 1.03594209593163;
    this.model.C[17] = 1.11270370697444;
    this.model.C[18] = 1.83684421468796;
    this.model.C[19] = 3.50725838773445;
    this.model.C[20] = 5.73470372056056;
    this.model.C[21] = 7.52875163882643;
    this.model.C[22] = 8.21485099416476;
    this.model.C[23] = 7.58988920514371;
    this.model.C[24] = 6.51726456942171;
    this.model.C[25] = 5.84950648397856;
    this.model.C[26] = 6.02952265146832;
    this.model.C[27] = 6.3780067794768;
    this.model.C[28] = 6.26116609718156;
    this.model.C[29] = 5.78633099878404;
    this.model.C[30] = 5.31149590038652;
    this.model.C[31] = 4.71370636306204;
    this.model.C[32] = 3.9216352261071;
    this.model.C[33] = 3.14722605275493;
    this.model.C[34] = 2.5283780203656;

    this.model.E[11] = 16.4636673029502;
    this.model.E[12] = 14.7341534824637;
    this.model.E[13] = 14.4739791724691;
    this.model.E[14] = 14.5398718828333;
    this.model.E[15] = 14.6512781147892;
    this.model.E[16] = 12.8450026832599;
    this.model.E[17] = 12.2920473612347;

    this.model.D[41] = 100;
    this.model.D[42] = 1.31322314049587;
    this.model.D[43] = 14.6321212121212;
    this.model.D[44] = 44.884738292011;
    this.model.D[45] = 31.6226170798898;
    this.model.D[46] = 7.54396694214876;
    this.model.D[47] = 11;

    this.model.E[41] = 5;

    this.model.F[42] = 6;
    this.model.F[43] = 6;
    this.model.F[44] = 5;
    this.model.F[45] = 2.5;
    this.model.F[46] = 1.5;

    this.model.G[42] = 90;
    this.model.G[43] = 60;
    this.model.G[44] = 40;
    this.model.G[45] = 20;
    this.model.G[46] = 20;
    this.model.G[47] = 72;

    this.model.H[41] = 3;
    this.model.H[42] = 120;
    this.model.H[43] = 90;
    this.model.H[44] = 40;
    this.model.H[45] = 10;
    this.model.H[46] = 10;
    this.model.H[47] = 72;

    this.model.I[47] = 12;

    this.model.L[6] = 1;

    this.model.N[10] = 4;
    this.model.N[11] = 4;
    this.model.N[12] = 4;
    this.model.N[13] = 4;
    this.model.N[14] = 4;
    this.model.N[15] = 4;
    this.model.N[16] = 4;
    this.model.N[17] = 7;
    this.model.N[18] = 7;
    this.model.N[19] = 7;
    this.model.N[20] = 7;
    this.model.N[21] = 7;
    this.model.N[22] = 7;
    this.model.N[23] = 7;
    this.model.N[24] = 7;
    this.model.N[25] = 7;
    this.model.N[26] = 7;
    this.model.N[27] = 7;
    this.model.N[28] = 7;
    this.model.N[29] = 4;
    this.model.N[30] = 4;
    this.model.N[31] = 4;
    this.model.N[32] = 4;
    this.model.N[33] = 4;

    this.model.P[10] = 6;
    this.model.P[11] = 6;
    this.model.P[12] = 6;
    this.model.P[13] = 8;
    this.model.P[14] = 8;
    this.model.P[15] = 8;
    this.model.P[16] = 8;
    this.model.P[17] = 8;
    this.model.P[18] = 8;
    this.model.P[19] = 8;
    this.model.P[20] = 8;
    this.model.P[21] = 6;
    this.model.P[22] = 6;
    this.model.P[23] = 6;
    this.model.P[24] = 6;
    this.model.P[25] = 6;
    this.model.P[26] = 6;
    this.model.P[27] = 6;
    this.model.P[28] = 6;
    this.model.P[29] = 6;
    this.model.P[30] = 6;
    this.model.P[31] = 6;
    this.model.P[32] = 6;
    this.model.P[33] = 6;

    this.model.R[10] = 50;
    this.model.R[11] = 50;
    this.model.R[12] = 50;
    this.model.R[13] = 50;
    this.model.R[14] = 50;
    this.model.R[15] = 50;
    this.model.R[16] = 50;
    this.model.R[17] = 50;
    this.model.R[18] = 50;
    this.model.R[19] = 50;
    this.model.R[20] = 50;
    this.model.R[21] = 50;
    this.model.R[22] = 50;
    this.model.R[23] = 50;
    this.model.R[24] = 50;
    this.model.R[25] = 50;
    this.model.R[26] = 50;
    this.model.R[27] = 50;
    this.model.R[28] = 50;
    this.model.R[29] = 50;
    this.model.R[30] = 50;
    this.model.R[31] = 50;
    this.model.R[32] = 50;
    this.model.R[33] = 50;

    this.model.T[10] = 15;
    this.model.T[11] = 15;
    this.model.T[12] = 15;
    this.model.T[13] = 15;
    this.model.T[14] = 15;
    this.model.T[15] = 15;
    this.model.T[16] = 15;
    this.model.T[17] = 15;
    this.model.T[18] = 15;
    this.model.T[19] = 15;
    this.model.T[20] = 15;
    this.model.T[21] = 15;
    this.model.T[22] = 15;
    this.model.T[23] = 15;
    this.model.T[24] = 15;
    this.model.T[25] = 15;
    this.model.T[26] = 15;
    this.model.T[27] = 15;
    this.model.T[28] = 15;
    this.model.T[29] = 15;
    this.model.T[30] = 15;
    this.model.T[31] = 15;
    this.model.T[32] = 15;
    this.model.T[33] = 15;

    this.onSubmit();
  }

  onSubmit() {
    this.model.wynik1 = this.model.pole1 - this.model.pole2;
    this.model.wynik2 = this.model.pole3 - this.model.pole4;

    var sum = 0;
    for (let i = 11; i < 35; i++)
      sum += this.model.C[i]
    this.model.C[35] = sum;

    var sum = 0;
    for (let i = 41; i < 48; i++)
      sum += this.model.D[i] / 100.0 * this.model.E[i]
    this.model.E[48] = sum

    var sum = 0;
    for (let i = 41; i < 48; i++)
      sum += this.model.D[i] / 100.0 * this.model.F[i]
    this.model.F[48] = sum

    var sum = 0;
    for (let i = 41; i < 48; i++)
      sum += this.model.D[i] / 100.0 * this.model.G[i]
    this.model.G[48] = sum

    var sum = 0;
    for (let i = 41; i < 48; i++)
      sum += this.model.D[i] / 100.0 * this.model.H[i]
    this.model.H[48] = sum

    var sum = 0;
    for (let i = 41; i < 48; i++)
      sum += this.model.D[i] / 100.0 * this.model.I[i]
    this.model.I[48] = sum


    for (let j = 10; j < 34; j++)
      this.model.M[j] = 7.0 * this.model.D[6] * this.model.C[j + 1] / 100.0 * this.model.E[10 + this.model.L[6]] / 100.0;

    var sum = 0;
    for (let i = 10; i < 34; i++)
      sum += this.model.M[i];
    this.model.M[34] = sum;

    for (let j = 10; j < 34; j++)
      this.model.O[j] = this.model.N[j]*60.0/this.model.H[48];

    for (let j = 10; j < 34; j++)
      this.model.Q[j] = this.model.P[j]*60.0/this.model.G[48];

    for (let j = 10; j < 34; j++)
      this.model.S[j] = this.model.R[j]/this.model.F[48];

    for (let j = 10; j < 34; j++)
      this.model.U[j] = this.model.T[j]/this.model.I[48];

    var sum = 0;
      for (let i = 10; i < 34; i++)
        sum += this.model.O[i];
      this.model.O[34] = sum

      var sum = 0;
      for (let i = 10; i < 34; i++)
        sum += this.model.Q[i];
      this.model.Q[34] = sum

      var sum = 0;
      for (let i = 10; i < 34; i++)
        sum += this.model.S[i];
      this.model.S[34] = sum

      var sum = 0;
      for (let i = 10; i < 34; i++)
        sum += this.model.U[i];
      this.model.U[34] = sum

      this.model.O[35] = this.model.M[34]/this.model.O[34]*100
      this.model.Q[35] = this.model.M[34]/this.model.Q[34]*100
      this.model.S[35] = this.model.M[34]/this.model.S[34]*100
      this.model.U[35] = this.model.M[34]/this.model.U[34]*100

    for (let j = 10; j < 34; j++)
      this.model.W[j] = Math.min(this.model.O[j],this.model.Q[j],this.model.S[j],this.model.U[j]);

    for (let j = 10; j < 34; j++)
      switch(this.model.W[j])
      {
        case this.model.M[j]: this.model.V[j] = "Demand"; break;
        case this.model.O[j]: this.model.V[j] = "Pielegn"; break;
        case this.model.Q[j]: this.model.V[j] = "Lekarz"; break;
        case this.model.S[j]: this.model.V[j] = "Lozka"; break;
        case this.model.T[j]: this.model.V[j] = "Obs. Beds"; break;
        default: this.model.V[j] = "N/A"; break;
      }

      for (let j = 10; j < 34; j++)
        this.model.X[j] = this.model.W[j] >= this.model.M[j] ? "" : "Niedobor wydajn";
      
  }

  showFormControls(form: any) {
    return form && form.controls.name &&
      form.controls.name.value; // Dr. IQ
  }
}
