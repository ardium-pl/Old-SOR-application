import { Component } from '@angular/core';
import { Tabela11 } from '../tabela1-1';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-tabela1',
  templateUrl: './tabela1.component.html',
  styleUrls: ['./tabela1.component.scss']
})
export class Tabela1Component {

  model = new Tabela11();

  constructor() { }

  public chart: any;

  updateChart()
  {
    this.chart.data.datasets = [
      {
        label: "Niezaspokojone zapotrzebowanie w okresie",
        data: [this.model.B [17] , this.model.E [17], this.model.F [17], this.model.G [17], this.model.H [17], this.model.I [17], this.model.J [17], this.model.K [17], this.model.L [17], this.model.M [17], this.model.N [17], this.model.O [17], this.model.P [17], this.model.Q [17], this.model.R [17], this.model.S [17], this.model.T [17], this.model.U [17], this.model.V [17], this.model.W [17], this.model.X [17], this.model.Y [17], this.model.Z [17], this.model.AA[17], this.model.AB[17]],
        backgroundColor: 'blue'
      },

        {
          label: "Niedostosowanie (\"Zapotrzebowanie - Wydajność\")",
          data: [this.model.B [18] , this.model.E [18], this.model.F [18], this.model.G [18], this.model.H [18], this.model.I [18], this.model.J [18], this.model.K [18], this.model.L [18], this.model.M [18], this.model.N [18], this.model.O [18], this.model.P [18], this.model.Q [18], this.model.R [18], this.model.S [18], this.model.T [18], this.model.U [18], this.model.V [18], this.model.W [18], this.model.X [18], this.model.Y [18], this.model.Z [18], this.model.AA[18], this.model.AB[18]],
          backgroundColor: 'orange'
        }
    ];

    this.chart.update();
  }

  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24"], 
	       datasets: [
          {
            label: "Niezaspokojone zapotrzebowanie w okresie",
            data: [this.model.B [17] , this.model.E [17], this.model.F [17], this.model.G [17], this.model.H [17], this.model.I [17], this.model.J [17], this.model.K [17], this.model.L [17], this.model.M [17], this.model.N [17], this.model.O [17], this.model.P [17], this.model.Q [17], this.model.R [17], this.model.S [17], this.model.T [17], this.model.U [17], this.model.V [17], this.model.W [17], this.model.X [17], this.model.Y [17], this.model.Z [17], this.model.AA[17], this.model.AB[17]],
            backgroundColor: 'blue'
          },

            {
              label: "Niedostosowanie (\"Zapotrzebowanie - Wydajność\")",
              data: [this.model.B [18] , this.model.E [18], this.model.F [18], this.model.G [18], this.model.H [18], this.model.I [18], this.model.J [18], this.model.K [18], this.model.L [18], this.model.M [18], this.model.N [18], this.model.O [18], this.model.P [18], this.model.Q [18], this.model.R [18], this.model.S [18], this.model.T [18], this.model.U [18], this.model.V [18], this.model.W [18], this.model.X [18], this.model.Y [18], this.model.Z [18], this.model.AA[18], this.model.AB[18]],
              backgroundColor: 'orange'
            }
        ]
      },
      options: {
        aspectRatio:10.0
      }
      
    });
  }

  defaultData() {

    for (let i = 0; i < 35; i++)
    {
      this.model.B[i] = 0;
      this.model.C[i] = 0;
      this.model.D[i] = "";
      this.model.E[i] = 0;
      this.model.F[i] = 0;
      this.model.G[i] = 0;
      this.model.H[i] = 0;
      this.model.I[i] = 0;
      this.model.J[i] = 0;
      this.model.K[i] = 0;
      this.model.L[i] = 0;
      this.model.M[i] = 0;
      this.model.N[i] = 0;
      this.model.O[i] = 0;
      this.model.P[i] = 0;
      this.model.Q[i] = 0;
      this.model.R[i] = 0;
      this.model.S[i] = 0;
      this.model.T[i] = 0;
      this.model.U[i] = 0;
      this.model.V[i] = 0;
      this.model.W[i] = 0;
      this.model.X[i] = 0;
      this.model.Y[i] = 0;
      this.model.Z[i] = 0;
      this.model.AA[i] = 0;
      this.model.AB[i] = 0;
    }

    this.model.B[6] = 7;
    this.model.B[9] = 2;
    this.model.B[10] = 0;
    this.model.B[11] = 4;
    this.model.B[12] = 1; 

    this.model.C[8] = 1;
    this.model.C[9] = 1;
    this.model.C[10] = 1;
    this.model.C[11] = 1;
    this.model.C[12] = 1; 

    this.model.D[8] = "Rano (6-18)";
    this.model.D[9] = "Popołudnie (12-24)";
    this.model.D[10] = "Noc (20-8)";
    this.model.D[11] = "Dzień (7-18)";
    this.model.D[12] = "Noc (19-6)"; 

    this.model.E[8] = 0;
    this.model.E[9] = 0;
    this.model.E[10] = 1;
    this.model.E[11] = 0;
    this.model.E[12] = 1; 

    this.model.F[8] = 0;
    this.model.F[9] = 0;
    this.model.F[10] = 1;
    this.model.F[11] = 0;
    this.model.F[12] = 1; 

    this.model.G[8] = 0;
    this.model.G[9] = 0;
    this.model.G[10] = 1;
    this.model.G[11] = 0;
    this.model.G[12] = 1; 

    this.model.H[8] = 0;
    this.model.H[9] = 0;
    this.model.H[10] = 1;
    this.model.H[11] = 0;
    this.model.H[12] = 1; 

    this.model.I[8] = 0;
    this.model.I[9] = 0;
    this.model.I[10] = 1;
    this.model.I[11] = 0;
    this.model.I[12] = 1; 

    this.model.J[8] = 0;
    this.model.J[9] = 0;
    this.model.J[10] = 1;
    this.model.J[11] = 0;
    this.model.J[12] = 1; 

    this.model.K[8] = 1;
    this.model.K[9] = 0;
    this.model.K[10] = 1;
    this.model.K[11] = 0;
    this.model.K[12] = 1; 

    this.model.L[8] = 1;
    this.model.L[9] = 0;
    this.model.L[10] = 1;
    this.model.L[11] = 1;
    this.model.L[12] = 0; 

    this.model.M[8] = 1;
    this.model.M[9] = 0;
    this.model.M[10] = 0;
    this.model.M[11] = 1;
    this.model.M[12] = 0; 

    this.model.N[8] = 1;
    this.model.N[9] = 0;
    this.model.N[10] = 0;
    this.model.N[11] = 1;
    this.model.N[12] = 0;

    this.model.O[8] = 1;
    this.model.O[9] = 0;
    this.model.O[10] = 0;
    this.model.O[11] = 1;
    this.model.O[12] = 0;

    this.model.P[8] = 1;
    this.model.P[9] = 0;
    this.model.P[10] = 0;
    this.model.P[11] = 1;
    this.model.P[12] = 0;

    this.model.Q[8] = 1;
    this.model.Q[9] = 1;
    this.model.Q[10] = 0;
    this.model.Q[11] = 1;
    this.model.Q[12] = 0;

    this.model.R[8] = 1;
    this.model.R[9] = 1;
    this.model.R[10] = 0;
    this.model.R[11] = 1;
    this.model.R[12] = 0;

    this.model.S[8] = 1;
    this.model.S[9] = 1;
    this.model.S[10] = 0;
    this.model.S[11] = 1;
    this.model.S[12] = 0;

    this.model.T[8] = 1;
    this.model.T[9] = 1;
    this.model.T[10] = 0;
    this.model.T[11] = 1;
    this.model.T[12] = 0;

    this.model.U[8] = 1;
    this.model.U[9] = 1;
    this.model.U[10] = 0;
    this.model.U[11] = 1;
    this.model.U[12] = 0;

    this.model.V[8] = 1;
    this.model.V[9] = 1;
    this.model.V[10] = 0;
    this.model.V[11] = 1;
    this.model.V[12] = 0;

    this.model.W[8] = 0;
    this.model.W[9] = 1;
    this.model.W[10] = 0;
    this.model.W[11] = 1;
    this.model.W[12] = 0;

    this.model.X[8] = 0;
    this.model.X[9] = 1;
    this.model.X[10] = 0;
    this.model.X[11] = 0;
    this.model.X[12] = 1;

    this.model.Y[8] = 0;
    this.model.Y[9] = 1;
    this.model.Y[10] = 1;
    this.model.Y[11] = 0;
    this.model.Y[12] = 1;

    this.model.Z[8] = 0;
    this.model.Z[9] = 1;
    this.model.Z[10] = 1;
    this.model.Z[11] = 0;
    this.model.Z[12] = 1;

    this.model.AA[8] = 0;
    this.model.AA[9] = 1;
    this.model.AA[10] = 1;
    this.model.AA[11] = 0;
    this.model.AA[12] = 1;

    this.model.AB[8] = 0;
    this.model.AB[9] = 1;
    this.model.AB[10] = 1;
    this.model.AB[11] = 0;
    this.model.AB[12] = 1;

    this.model.E[7] = 1.89002900637869;
    this.model.F[7] = 1.40138623349275;
    this.model.G[7] = 1.25502065344861;
    this.model.H[7] = 1.07013781549813;
    this.model.I[7] = 0.996313071177619;
    this.model.J[7] = 0.978980305119761;
    this.model.K[7] = 1.05152114084339;
    this.model.L[7] = 1.73584442297956;
    this.model.M[7] = 3.31441004284152;
    this.model.N[7] = 5.41937818742362;
    this.model.O[7] = 7.11477948960151;
    this.model.P[7] = 7.76315333102509;
    this.model.Q[7] = 7.17255537646104;
    this.model.R[7] = 6.15890953922556;
    this.model.S[7] = 5.52786846385984;
    this.model.T[7] = 5.69798635294622;
    this.model.U[7] = 6.02730890804553;
    this.model.V[7] = 5.91689276871399;
    this.model.W[7] = 5.468166714105;
    this.model.X[7] = 5.019440659496;
    this.model.Y[7] = 4.45452087686952;
    this.model.Z[7] = 3.70600216488943;
    this.model.AA[7] = 2.97417426466875;
    this.model.AB[7] = 2.38935389879066;

    this.model.E[24] = 0;
    this.onSubmit();
  }
  
  ngOnInit() {
    this.defaultData();
    this.createChart();
  }

  onSubmit() {
    this.model.B[18] = 60.0/52.0;

    this.model.B[15] = 0;
    this.model.E [15] = 0;
    this.model.F [15] = 0;
    this.model.G [15] = 0;
    this.model.H [15] = 0;
    this.model.I [15] = 0;
    this.model.J [15] = 0;
    this.model.K [15] = 0;
    this.model.L [15] = 0;
    this.model.M [15] = 0;
    this.model.N [15] = 0;
    this.model.O [15] = 0;
    this.model.P [15] = 0;
    this.model.Q [15] = 0;
    this.model.R [15] = 0;
    this.model.S [15] = 0;
    this.model.T [15] = 0;
    this.model.U [15] = 0;
    this.model.V [15] = 0;
    this.model.W [15] = 0;
    this.model.X [15] = 0;
    this.model.Y [15] = 0;
    this.model.Z [15] = 0;
    this.model.AA[15] = 0;
    this.model.AB[15] = 0;

    for (let i = 8; i < 15; i++ )
    {
      this.model.B[15] += this.model.B[i];
      this.model.E [15] += this.model.B[i] * this.model.E [i];
      this.model.F [15] += this.model.B[i] * this.model.F [i];
      this.model.G [15] += this.model.B[i] * this.model.G [i];
      this.model.H [15] += this.model.B[i] * this.model.H [i];
      this.model.I [15] += this.model.B[i] * this.model.I [i];
      this.model.J [15] += this.model.B[i] * this.model.J [i];
      this.model.K [15] += this.model.B[i] * this.model.K [i];
      this.model.L [15] += this.model.B[i] * this.model.L [i];
      this.model.M [15] += this.model.B[i] * this.model.M [i];
      this.model.N [15] += this.model.B[i] * this.model.N [i];
      this.model.O [15] += this.model.B[i] * this.model.O [i];
      this.model.P [15] += this.model.B[i] * this.model.P [i];
      this.model.Q [15] += this.model.B[i] * this.model.Q [i];
      this.model.R [15] += this.model.B[i] * this.model.R [i];
      this.model.S [15] += this.model.B[i] * this.model.S [i];
      this.model.T [15] += this.model.B[i] * this.model.T [i];
      this.model.U [15] += this.model.B[i] * this.model.U [i];
      this.model.V [15] += this.model.B[i] * this.model.V [i];
      this.model.W [15] += this.model.B[i] * this.model.W [i];
      this.model.X [15] += this.model.B[i] * this.model.X [i];
      this.model.Y [15] += this.model.B[i] * this.model.Y [i];
      this.model.Z [15] += this.model.B[i] * this.model.Z [i];
      this.model.AA[15] += this.model.B[i] * this.model.AA[i];
      this.model.AB[15] += this.model.B[i] * this.model.AB[i];
    }

    this.model.E [16] = this.model.E [15] * this.model.B[18];
    this.model.F [16] = this.model.F [15] * this.model.B[18];
    this.model.G [16] = this.model.G [15] * this.model.B[18];
    this.model.H [16] = this.model.H [15] * this.model.B[18];
    this.model.I [16] = this.model.I [15] * this.model.B[18];
    this.model.J [16] = this.model.J [15] * this.model.B[18];
    this.model.K [16] = this.model.K [15] * this.model.B[18];
    this.model.L [16] = this.model.L [15] * this.model.B[18];
    this.model.M [16] = this.model.M [15] * this.model.B[18];
    this.model.N [16] = this.model.N [15] * this.model.B[18];
    this.model.O [16] = this.model.O [15] * this.model.B[18];
    this.model.P [16] = this.model.P [15] * this.model.B[18];
    this.model.Q [16] = this.model.Q [15] * this.model.B[18];
    this.model.R [16] = this.model.R [15] * this.model.B[18];
    this.model.S [16] = this.model.S [15] * this.model.B[18];
    this.model.T [16] = this.model.T [15] * this.model.B[18];
    this.model.U [16] = this.model.U [15] * this.model.B[18];
    this.model.V [16] = this.model.V [15] * this.model.B[18];
    this.model.W [16] = this.model.W [15] * this.model.B[18];
    this.model.X [16] = this.model.X [15] * this.model.B[18];
    this.model.Y [16] = this.model.Y [15] * this.model.B[18];
    this.model.Z [16] = this.model.Z [15] * this.model.B[18];
    this.model.AA[16] = this.model.AA[15] * this.model.B[18];
    this.model.AB[16] = this.model.AB[15] * this.model.B[18];


    this.model.E [17] = Math.max(this.model.E [7] - this.model.E [16], 0);
    this.model.F [17] = Math.max(this.model.F [7] - this.model.F [16], 0);
    this.model.G [17] = Math.max(this.model.G [7] - this.model.G [16], 0);
    this.model.H [17] = Math.max(this.model.H [7] - this.model.H [16], 0);
    this.model.I [17] = Math.max(this.model.I [7] - this.model.I [16], 0);
    this.model.J [17] = Math.max(this.model.J [7] - this.model.J [16], 0);
    this.model.K [17] = Math.max(this.model.K [7] - this.model.K [16], 0);
    this.model.L [17] = Math.max(this.model.L [7] - this.model.L [16], 0);
    this.model.M [17] = Math.max(this.model.M [7] - this.model.M [16], 0);
    this.model.N [17] = Math.max(this.model.N [7] - this.model.N [16], 0);
    this.model.O [17] = Math.max(this.model.O [7] - this.model.O [16], 0);
    this.model.P [17] = Math.max(this.model.P [7] - this.model.P [16], 0);
    this.model.Q [17] = Math.max(this.model.Q [7] - this.model.Q [16], 0);
    this.model.R [17] = Math.max(this.model.R [7] - this.model.R [16], 0);
    this.model.S [17] = Math.max(this.model.S [7] - this.model.S [16], 0);
    this.model.T [17] = Math.max(this.model.T [7] - this.model.T [16], 0);
    this.model.U [17] = Math.max(this.model.U [7] - this.model.U [16], 0);
    this.model.V [17] = Math.max(this.model.V [7] - this.model.V [16], 0);
    this.model.W [17] = Math.max(this.model.W [7] - this.model.W [16], 0);
    this.model.X [17] = Math.max(this.model.X [7] - this.model.X [16], 0);
    this.model.Y [17] = Math.max(this.model.Y [7] - this.model.Y [16], 0);
    this.model.Z [17] = Math.max(this.model.Z [7] - this.model.Z [16], 0);
    this.model.AA[17] = Math.max(this.model.AA[7] - this.model.AA[16], 0);
    this.model.AB[17] = Math.max(this.model.AB[7] - this.model.AB[16], 0);

    this.model.E [18] = this.model.E [7] - this.model.E [16];
    this.model.F [18] = this.model.F [7] - this.model.F [16];
    this.model.G [18] = this.model.G [7] - this.model.G [16];
    this.model.H [18] = this.model.H [7] - this.model.H [16];
    this.model.I [18] = this.model.I [7] - this.model.I [16];
    this.model.J [18] = this.model.J [7] - this.model.J [16];
    this.model.K [18] = this.model.K [7] - this.model.K [16];
    this.model.L [18] = this.model.L [7] - this.model.L [16];
    this.model.M [18] = this.model.M [7] - this.model.M [16];
    this.model.N [18] = this.model.N [7] - this.model.N [16];
    this.model.O [18] = this.model.O [7] - this.model.O [16];
    this.model.P [18] = this.model.P [7] - this.model.P [16];
    this.model.Q [18] = this.model.Q [7] - this.model.Q [16];
    this.model.R [18] = this.model.R [7] - this.model.R [16];
    this.model.S [18] = this.model.S [7] - this.model.S [16];
    this.model.T [18] = this.model.T [7] - this.model.T [16];
    this.model.U [18] = this.model.U [7] - this.model.U [16];
    this.model.V [18] = this.model.V [7] - this.model.V [16];
    this.model.W [18] = this.model.W [7] - this.model.W [16];
    this.model.X [18] = this.model.X [7] - this.model.X [16];
    this.model.Y [18] = this.model.Y [7] - this.model.Y [16];
    this.model.Z [18] = this.model.Z [7] - this.model.Z [16];
    this.model.AA[18] = this.model.AA[7] - this.model.AA[16];
    this.model.AB[18] = this.model.AB[7] - this.model.AB[16];

    for (let i = 8; i < 15; i++ )
    {
      this.model.E [i+13] = this.model.C [i] * this.model.E [i];
      this.model.F [i+13] = this.model.C [i] * this.model.F [i];
      this.model.G [i+13] = this.model.C [i] * this.model.G [i];
      this.model.H [i+13] = this.model.C [i] * this.model.H [i];
      this.model.I [i+13] = this.model.C [i] * this.model.I [i];
      this.model.J [i+13] = this.model.C [i] * this.model.J [i];
      this.model.K [i+13] = this.model.C [i] * this.model.K [i];
      this.model.L [i+13] = this.model.C [i] * this.model.L [i];
      this.model.M [i+13] = this.model.C [i] * this.model.M [i];
      this.model.N [i+13] = this.model.C [i] * this.model.N [i];
      this.model.O [i+13] = this.model.C [i] * this.model.O [i];
      this.model.P [i+13] = this.model.C [i] * this.model.P [i];
      this.model.Q [i+13] = this.model.C [i] * this.model.Q [i];
      this.model.R [i+13] = this.model.C [i] * this.model.R [i];
      this.model.S [i+13] = this.model.C [i] * this.model.S [i];
      this.model.T [i+13] = this.model.C [i] * this.model.T [i];
      this.model.U [i+13] = this.model.C [i] * this.model.U [i];
      this.model.V [i+13] = this.model.C [i] * this.model.V [i];
      this.model.W [i+13] = this.model.C [i] * this.model.W [i];
      this.model.X [i+13] = this.model.C [i] * this.model.X [i];
      this.model.Y [i+13] = this.model.C [i] * this.model.Y [i];
      this.model.Z [i+13] = this.model.C [i] * this.model.Z [i];
      this.model.AA[i+13] = this.model.C [i] * this.model.AA[i];
      this.model.AB[i+13] = this.model.C [i] * this.model.AB[i];
    }

    this.model.E[29] = this.model.E [7]+this.model.F [7]+this.model.G [7]+this.model.H [7]+this.model.I [7]+this.model.J [7]+this.model.K [7]+this.model.L [7]+this.model.M [7]+this.model.N [7]+this.model.O [7]+this.model.P [7]+this.model.Q [7]+this.model.R [7]+this.model.S [7]+this.model.T [7]+this.model.U [7]+this.model.V [7]+this.model.W [7]+this.model.X [7]+this.model.Y [7]+this.model.Z [7]+this.model.AA[7]+this.model.AB[7];
    this.model.E[30] = this.model.E [16]+this.model.F [16]+this.model.G [16]+this.model.H [16]+this.model.I [16]+this.model.J [16]+this.model.K [16]+this.model.L [16]+this.model.M [16]+this.model.N [16]+this.model.O [16]+this.model.P [16]+this.model.Q [16]+this.model.R [16]+this.model.S [16]+this.model.T [16]+this.model.U [16]+this.model.V [16]+this.model.W [16]+this.model.X [16]+this.model.Y [16]+this.model.Z [16]+this.model.AA[16]+this.model.AB[16];
    this.model.E[31] = Math.max(this.model.E[29]-this.model.E[30], 0);
    this.model.E[32] = Math.max(0, -(this.model.E [18]+this.model.F [18]+this.model.G [18]+this.model.H [18]+this.model.I [18]+this.model.J [18]+this.model.K [18]+this.model.L [18]+this.model.M [18]+this.model.N [18]+this.model.O [18]+this.model.P [18]+this.model.Q [18]+this.model.R [18]+this.model.S [18]+this.model.T [18]+this.model.U [18]+this.model.V [18]+this.model.W [18]+this.model.X [18]+this.model.Y [18]+this.model.Z [18]+this.model.AA[18]+this.model.AB[18]));
    this.model.AC17 = this.model.E [17]+this.model.F [17]+this.model.G [17]+this.model.H [17]+this.model.I [17]+this.model.J [17]+this.model.K [17]+this.model.L [17]+this.model.M [17]+this.model.N [17]+this.model.O [17]+this.model.P [17]+this.model.Q [17]+this.model.R [17]+this.model.S [17]+this.model.T [17]+this.model.U [17]+this.model.V [17]+this.model.W [17]+this.model.X [17]+this.model.Y [17]+this.model.Z [17]+this.model.AA[17]+this.model.AB[17]
  
    if (this.chart !== undefined)
      this.updateChart();
  }
}
