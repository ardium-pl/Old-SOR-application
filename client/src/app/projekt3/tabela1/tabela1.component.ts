import { Component } from '@angular/core';
import { Tabela11 } from '../tabela1-1';

@Component({
  selector: 'app-tabela1',
  templateUrl: './tabela1.component.html',
  styleUrls: ['./tabela1.component.scss']
})
export class Tabela1Component {

  model = new Tabela11();

  constructor() { }


  ngOnInit() {
    this.defaultData();
  }

  defaultData() {

    this.model.F[7] = 95;
    this.model.F[8] = 95;
    this.model.F[9] = 100;
    this.model.F[10] = 95;
    this.model.F[11] = 95;
    this.model.F[12] = 100;
    this.model.F[13] = 75;
    this.model.F[14] = 50;
    this.model.F[15] = 20;
    this.model.F[16] = 20;
    this.model.F[17] = 20;
    this.model.F[18] = 20;
    this.model.F[20] = 80;
    this.model.F[21] = 50;
    this.model.F[22] = 10;
    this.model.F[23] = 10;
    this.model.F[24] = 10;
    this.model.F[25] = 75;
    this.model.F[26] = 20;
    this.model.F[27] = 60;
    this.model.F[28] = 20;
    this.model.F[29] = 20;
    this.model.F[30] = 30;
    this.model.F[32] = 95;
    this.model.F[33] = 95;
    this.model.F[34] = 95;
    this.model.F[35] = 95;
    this.model.F[36] = 80;
    this.model.F[37] = 80;
    this.model.F[38] = 80;
    this.model.F[39] = 80;
    this.model.F[40] = 80;
    this.model.F[41] = 80;
    this.model.F[42] = 80;
    this.model.F[43] = 80;
    this.model.F[44] = 80;
    this.model.F[45] = 80;
    this.model.F[46] = 80;
    this.model.F[47] = 75;
    this.model.F[48] = 70;
    this.model.F[49] = 70;
    this.model.F[50] = 50;
    this.model.F[51] = 50;
    this.model.F[53] = 50;
    this.model.F[54] = 50;
    this.model.F[55] = 50;
    this.model.F[56] = 50;
    this.model.F[57] = 50;
    this.model.F[58] = 50;
    this.model.F[59] = 50;
    this.model.F[60] = 50;
    this.model.F[61] = 50;
    this.model.F[62] = 50;
    this.model.F[63] = 50;
    this.model.F[64] = 50;
    this.model.F[65] = 50;
    this.model.F[66] = 50;
    this.model.F[67] = 50;
    this.model.F[68] = 50;
    this.model.F[69] = 50;
    this.model.F[70] = 50;
    this.model.F[71] = 50;
    this.model.F[72] = 50;
    this.model.F[73] = 50;
    this.model.F[74] = 50;
    this.model.F[75] = 10;

    this.model.G[2] = 66;
    this.model.G[7] = 40;
    this.model.G[8] = 12;
    this.model.G[9] = 66;
    this.model.G[10] = 50;
    this.model.G[11] = 50;
    this.model.G[12] = 62;
    this.model.G[13] = 40;
    this.model.G[14] = 20;
    this.model.G[15] = 10;
    this.model.G[16] = 10;
    this.model.G[17] = 10;
    this.model.G[18] = 10;
    this.model.G[20] = 5;
    this.model.G[21] = 0;
    this.model.G[22] = -1;
    this.model.G[23] = -1;
    this.model.G[24] = -1;
    this.model.G[25] = 13;
    this.model.G[26] = 2;
    this.model.G[27] = 63;
    this.model.G[28] = 13;
    this.model.G[29] = 20;
    this.model.G[30] = 13;
    this.model.G[32] = 29;
    this.model.G[33] = 32;
    this.model.G[34] = 10;
    this.model.G[35] = 15;
    this.model.G[36] = 4;
    this.model.G[37] = 10;
    this.model.G[38] = 10;
    this.model.G[39] = 4;
    this.model.G[40] = 18;
    this.model.G[41] = 10;
    this.model.G[42] = 31;
    this.model.G[43] = 28;
    this.model.G[44] = 1;
    this.model.G[45] = 1;
    this.model.G[46] = 3;
    this.model.G[47] = 10;
    this.model.G[48] = 10;
    this.model.G[49] = 4;
    this.model.G[50] = 5;
    this.model.G[51] = 4;
    this.model.G[53] = -1;
    this.model.G[54] = -1;
    this.model.G[55] = -1;
    this.model.G[56] = -1;
    this.model.G[57] = -1;
    this.model.G[58] = -1;
    this.model.G[59] = -1;
    this.model.G[60] = -1;
    this.model.G[61] = -1;
    this.model.G[62] = -1;
    this.model.G[63] = -1;
    this.model.G[64] = -1;
    this.model.G[65] = -1;
    this.model.G[66] = -1;
    this.model.G[67] = -1;
    this.model.G[68] = -1;
    this.model.G[69] = -1;
    this.model.G[70] = -1;
    this.model.G[71] = -1;
    this.model.G[72] = -1;
    this.model.G[73] = -1;
    this.model.G[74] = -1;
    this.model.G[75] = -1;

    this.onSubmit();
  }

  onSubmit() {
    for (let i = 7; i < 75; i++)
      if (this.model.G[i] != -1 && this.model.G[i] !== undefined )
        this.model.K[i] = (this.model.G[2] - Math.sqrt(this.model.F[i] / 100.0 * (1 - this.model.F[i] / 100.0)) * this.model.G[2] - this.model.G[i]) / this.model.G[2] * 100.0;

        for (let i = 7; i < 75; i++)
        if (this.model.G[i] != -1 && this.model.G[i] !== undefined )
          this.model.H[i] = this.model.G[i] / this.model.G[2] * 100.0;
  }
}
