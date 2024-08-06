import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { Tabela50104 } from '../tabela-5-01-04';

@Component({
  selector: 'app-efektywne-wykorzystanie-zasobow',
  templateUrl: './efektywne-wykorzystanie-zasobow.component.html',
  styleUrls: ['./efektywne-wykorzystanie-zasobow.component.scss']
})
export class EfektywneWykorzystanieZasobowComponent {
  model = new Tabela50104();

  constructor() { }

  public chart1: any;
  public chart2: any;
  public chart3: any;
  public chart4: any;
  public chart5: any;
  public chart6: any;
  public chart7: any;
  public chart8: any;
  widok = 1;
  wykres = 1;

  ngOnInit() {
    this.defaultData();


    var ctx1 = document.getElementById('MyChart1'); // node
    var ctx2 = document.getElementById('MyChart2'); // node
    var ctx3 = document.getElementById('MyChart3'); // node
    var ctx4 = document.getElementById('MyChart4'); // node
    var ctx5 = document.getElementById('MyChart5'); // node
    var ctx6 = document.getElementById('MyChart6'); // node
    var ctx7 = document.getElementById('MyChart7'); // node
    var ctx8 = document.getElementById('MyChart8'); // node

    this.createChart1(ctx1);
    this.createChart2(ctx2);
    this.createChart3(ctx3);
    this.createChart4(ctx4);
    this.createChart5(ctx5);
    this.createChart6(ctx6);
    this.createChart7(ctx7);
    this.createChart8(ctx8);

    
    //let temparr = this.model.S_CK.slice(4, 124);
    //console.log(temparr.length)
    //console.log(temparr[0], temparr[119])
  }

  setView(_view: number) {
    this.widok = _view;
  }

  updateChart1()
  {
    this.chart1.data.datasets = [
      {
        label: "Oczek. na triage",
        data: this.model.S_CG.slice(4, 124),
        backgroundColor: 'blue'
      },
      {
        label: "W triage'u",
        data: this.model.S_CH.slice(4, 124),
        backgroundColor: 'orange'
      },
      {
        label: "Oczek. na łóżko",
        data: this.model.S_CI.slice(4, 124),
        backgroundColor: 'grey'
      },
      {
        label: "Oczek. na obsługę",
        data: this.model.S_CJ.slice(4, 124),
        backgroundColor: 'yellow'
      },
      {
        label: "Obsługa",
        data: this.model.S_CK.slice(4, 124),
        backgroundColor: 'lightblue'
      },
      {
        label: "Oczek. na obserw.",
        data: this.model.S_CL.slice(4, 124),
        backgroundColor: 'green'
      },
      {
        label: "Obserw.",
        data: this.model.S_CM.slice(4, 124),
        backgroundColor: 'purple'
      },
      {
        label: "Oczek. na przyjęcie",
        data: this.model.S_CN.slice(4, 124),
        backgroundColor: 'pink'
      },
    ];

    this.chart1.update();
  }

  updateChart2()
  {
    this.chart2.data.datasets = [
      {
        label: "Oczek. na przyjęcie do szpit.",
        data: this.model.S_BY.slice(4, 124),
        backgroundColor: 'blue'
      },

    ];

    this.chart2.update();
  }
  updateChart3()
  {
    this.chart3.data.datasets = [
      {
        label: "W obserwacji",
        data: this.model.S_BO.slice(4, 124),
        backgroundColor: 'blue'
      },

    ];

    this.chart3.update();
  }
  updateChart4()
  {
    this.chart4.data.datasets = [
      {
        label: "Oczek. na obsługę (lek. i piel.)",
        data: this.model.S_AY.slice(4, 124),
        backgroundColor: 'blue'
      },

    ];

    this.chart4.update();
  }
  updateChart5()
  {
    this.chart5.data.datasets = [
      {
        label: "Oczek. na łóżko",
        data: this.model.S_AP.slice(4, 124),
        backgroundColor: 'blue'
      },

    ];

    this.chart5.update();
  }
  updateChart6()
  {
    this.chart6.data.datasets = [
      {
        label: "Zajętość łóżek",
        data: this.model.S_AK.slice(4, 124),
        backgroundColor: 'blue'
      },

    ];

    this.chart6.update();
  }
  updateChart7()
  {
    this.chart7.data.datasets = [
      {
        label: "Napł. kum",
        data: this.model.S_AB.slice(4, 124),
        backgroundColor: 'orange'
      },
      {
        label: "Triage kum.",
        data: this.model.S_AG.slice(4, 124),
        backgroundColor: 'grey'
      },
      {
        label: "Kumul. w łóżkach",
        data: this.model.S_AN.slice(4, 124),
        backgroundColor: 'green'
      },
      {
        label: "Rozpocz. kumul.",
        data: this.model.S_AW.slice(4, 124),
        backgroundColor: 'yellow'
      },
      {
        label: "Koniec kumul.",
        data: this.model.S_BA.slice(4, 124),
        backgroundColor: 'cyan'
      },
      {
        label: "Wypisy kumul",
        data: this.model.S_BZ.slice(4, 124),
        backgroundColor: 'blue'
      },

    ];

    this.chart7.update();
  }
  updateChart8()
  {
    this.chart8.data.datasets = [
      {
        label: "Oczekiwanie na triage",
        data: this.model.S_AE.slice(4, 124),
        backgroundColor: 'blue'
      },

    ];

    this.chart8.update();
  }

  createChart1(ctx : any){
  
    this.chart1 = new Chart(ctx, {
      type: 'line', //this denotes tha type of chart1

      data: {// values on X-Axis
        labels: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24", "0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24" ], 
	       datasets: [
          {
            label: "Oczek. na triage",
            data: this.model.S_CG.slice(4, 124),
            backgroundColor: 'blue'
          },
          {
            label: "W triage'u",
            data: this.model.S_CH.slice(4, 124),
            backgroundColor: 'orange'
          },
          {
            label: "Oczek. na łóżko",
            data: this.model.S_CI.slice(4, 124),
            backgroundColor: 'grey'
          },
          {
            label: "Oczek. na obsługę",
            data: this.model.S_CJ.slice(4, 124),
            backgroundColor: 'yellow'
          },
          {
            label: "Obsługa",
            data: this.model.S_CK.slice(4, 124),
            backgroundColor: 'lightblue'
          },
          {
            label: "Oczek. na obserw.",
            data: this.model.S_CL.slice(4, 124),
            backgroundColor: 'green'
          },
          {
            label: "Obserw.",
            data: this.model.S_CM.slice(4, 124),
            backgroundColor: 'purple'
          },
          {
            label: "Oczek. na przyjęcie",
            data: this.model.S_CN.slice(4, 124),
            backgroundColor: 'pink'
          },
        ]
      },
      options: {
        aspectRatio:3.0
      }
      
    });
  }

  createChart2(ctx : any){
  
    this.chart2 = new Chart(ctx, {
      type: 'line', //this denotes tha type of chart1

      data: {// values on X-Axis
        labels: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24", "0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24" ], 
	       datasets: [
          {
            label: "Oczek. na przyjęcie do szpit.",
            data: this.model.S_BY.slice(4, 124),
            backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio:3.0
      }
      
    });
  }
  createChart3(ctx : any){
  
    this.chart3 = new Chart(ctx, {
      type: 'line', //this denotes tha type of chart1

      data: {// values on X-Axis
        labels: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24", "0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24" ], 
	       datasets: [
          {
            label: "W obserwacji",
            data: this.model.S_BO.slice(4, 124),
            backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio:3.0
      }
      
    });
  }
  createChart4(ctx : any){
  
    this.chart4 = new Chart(ctx, {
      type: 'line', //this denotes tha type of chart1

      data: {// values on X-Axis
        labels: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24", "0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24" ], 
	       datasets: [
          {
            label: "Oczek. na obsługę (lek. i piel.)",
            data: this.model.S_AY.slice(4, 124),
            backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio:3.0
      }
      
    });
  }
  createChart5(ctx : any){
  
    this.chart5 = new Chart(ctx, {
      type: 'line', //this denotes tha type of chart1

      data: {// values on X-Axis
        labels: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24", "0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24" ], 
	       datasets: [
          {
            label: "Oczek. na łóżko",
            data: this.model.S_AP.slice(4, 124),
            backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio:3.0
      }
      
    });
  }
  createChart6(ctx : any){
  
    this.chart6 = new Chart(ctx, {
      type: 'line', //this denotes tha type of chart1

      data: {// values on X-Axis
        labels: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24", "0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24" ], 
	       datasets: [
          {
            label: "Zajętość łóżek",
            data: this.model.S_AK.slice(4, 124),
            backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio:3.0
      }
      
    });
  }
  createChart7(ctx : any){
  
    this.chart7 = new Chart(ctx, {
      type: 'line', //this denotes tha type of chart1

      data: {// values on X-Axis
        labels: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24", "0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24" ], 
	       datasets: [
          {
            label: "Napł. kum",
            data: this.model.S_AB.slice(4, 124),
            backgroundColor: 'orange'
          },
          {
            label: "Triage kum.",
            data: this.model.S_AG.slice(4, 124),
            backgroundColor: 'grey'
          },
          {
            label: "Kumul. w łóżkach",
            data: this.model.S_AN.slice(4, 124),
            backgroundColor: 'green'
          },
          {
            label: "Rozpocz. kumul.",
            data: this.model.S_AW.slice(4, 124),
            backgroundColor: 'yellow'
          },
          {
            label: "Koniec kumul.",
            data: this.model.S_BA.slice(4, 124),
            backgroundColor: 'cyan'
          },
          {
            label: "Wypisy kumul",
            data: this.model.S_BZ.slice(4, 124),
            backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio:3.0
      }
      
    });
  }
  createChart8(ctx : any){
  
    this.chart8 = new Chart(ctx, {
      type: 'line', //this denotes tha type of chart1

      data: {// values on X-Axis
        labels: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24", "0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24","0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18", "18-19", "19-20", "20-21", "21-22", "22-23", "23-24" ], 
	       datasets: [
          {
            label: "Oczekiwanie na triage",
            data: this.model.S_AE.slice(4, 124),
            backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio:3.0
      }
      
    });
  }

  onSubmit() {
    this.model.G[37] = Math.round(this.model.G[35] / 365.0);

    for (let i = 0; i < 24; i++)
      this.model.D[i + 7] = this.model.K[i + 41] = 7.0 * this.model.G[37] * this.model.F[i + 42] / 100.0 * this.model.H[41 + this.model.J[39]] / 100.0;

    this.model.F[66] = 0;
    for (let i = 42; i < 66; i++)
      this.model.F[66] += this.model.F[i];

    this.model.K[65] = 0;
    for (let i = 0; i < 24; i++)
      this.model.K[65] += this.model.K[i + 41];

    this.model.E[31] = 0;
    for (let i = 0; i < 24; i++)
      this.model.E[31] += this.model.E[i + 7];

    this.model.O[48] = this.model.R[4];

    this.model.P[49] = 0;
    this.model.Q[49] = 0;
    this.model.R[49] = 0;
    this.model.S[49] = 0;
    this.model.T[49] = 0;
    for (let i = 0; i < 7; i++) {
      this.model.P[49] += this.model.P[i + 42] * this.model.O[i + 42] / 100.0;
      this.model.Q[49] += this.model.Q[i + 42] * this.model.O[i + 42] / 100.0;
      this.model.R[49] += this.model.R[i + 42] * this.model.O[i + 42] / 100.0;
      this.model.S[49] += this.model.S[i + 42] * this.model.O[i + 42] / 100.0;
      this.model.T[49] += this.model.T[i + 42] * this.model.O[i + 42] / 100.0;
    }

    this.model.O[5] = this.model.O[10] * this.model.R[4] / 100.0;

    this.model.K[8] = (this.model.K[7] <= 15 && this.model.K[7] > 0 ? this.model.C[this.model.K[7] + 34] / 100.0 : 0);
    this.model.L[8] = (this.model.L[7] <= 15 && this.model.L[7] > 0 ? this.model.C[this.model.L[7] + 34] / 100.0: 0);
    this.model.M[8] = (this.model.M[7] <= 15 && this.model.M[7] > 0 ? this.model.C[this.model.M[7] + 34] / 100.0: 0);
    this.model.N[8] = (this.model.N[7] <= 15 && this.model.N[7] > 0 ? this.model.C[this.model.N[7] + 34] / 100.0: 0);
    this.model.O[8] = (this.model.O[7] <= 15 && this.model.O[7] > 0 ? this.model.C[this.model.O[7] + 34] / 100.0: 0);

    this.model.K[9] = this.model.K[5] * this.model.K[8];
    this.model.L[9] =  Math.max(this.model.L[5] * this.model.L[8], this.model.M[12])
    this.model.M[9] = this.model.M[5] * this.model.M[8];
    this.model.N[9] = this.model.N[5] * this.model.N[8];
    this.model.O[9] = this.model.O[5] * this.model.O[8];

    //log(this.model.O[9]+" = "+this.model.O[5]+" * " + this.model.O[8])

    this.model.K[10] = this.model.K[5] * this.model.K[7];
    this.model.L[10] = this.model.L[5] * this.model.L[7];
    this.model.M[10] = this.model.M[5] * this.model.M[7];
    this.model.N[10] = this.model.N[5] * this.model.N[7];

    this.model.K[11] = this.model.K[10];
    this.model.M[11] = this.model.N[11] = Math.max(this.model.M[10], this.model.N[10])
    this.model.O[11] = this.model.O[10];

    this.model.K[12] = Math.round((this.model.K[11]/60.0 + Number.EPSILON) * 100) / 100;
    this.model.M[12] = Math.ceil(this.model.M[11]/60.0)
    this.model.O[12] = this.model.O[11];

    this.zyjemyWSymulacji();

    this.model.K[19] = (Math.max(this.model.S_U[124], this.model.S_V[124], this.model.S_W[124], this.model.S_X[124], this.model.S_Y[124]) > 1 ? 1: 0);

    this.model.K[21] = Math.abs((this.model.S_AA[124] - (this.model.S_BZ[51] - this.model.S_BZ[27])) / this.model.S_AA[124]);
    this.model.K[20] = (Math.abs(this.model.K[21]) > 0.05 ? 1: 0);

    if (this.chart1 !== undefined) this.updateChart1();
    if (this.chart2 !== undefined) this.updateChart2();
    if (this.chart3 !== undefined) this.updateChart3();
    if (this.chart4 !== undefined) this.updateChart4();
    if (this.chart5 !== undefined) this.updateChart5();
    if (this.chart6 !== undefined) this.updateChart6();
    if (this.chart7 !== undefined) this.updateChart7();
    if (this.chart8 !== undefined) this.updateChart8();
  }

  zyjemyWSymulacji() {
    for (let j = 0; j < 5; j++)
    for (let i = 0; i < 24; i++)
    {
      this.model.S_B[4 + i + j*24] = i + j*24 + 1;

      this.model.S_D[4 + i + j*24] = this.model.D[i+7];
      this.model.S_E[4 + i + j*24] = this.model.F[i+7];
      this.model.S_F[4 + i + j*24] = this.model.G[i+7];
      this.model.S_G[4 + i + j*24] = this.model.H[i+7];
      this.model.S_H[4 + i + j*24] = this.model.K[15];
      this.model.S_I[4 + i + j*24] = this.model.K[16];

      this.model.S_J[4 + i + j*24] = this.model.S_E[4 + i + j*24] * 60.0 / this.model.K[9];
      this.model.S_K[4 + i + j*24] = this.model.S_F[4 + i + j*24] * 60.0 / this.model.N[9];
      this.model.S_L[4 + i + j*24] = this.model.S_G[4 + i + j*24] * 60.0 / this.model.M[9];
      this.model.S_M[4 + i + j*24] = this.model.S_H[4 + i + j*24] / this.model.M[12];
      this.model.S_N[4 + i + j*24] = this.model.S_I[4 + i + j*24] / this.model.O[9];

      this.model.S_O[4 + i + j*24] = Math.min(this.model.S_J[4 + i + j*24], this.model.S_K[4 + i + j*24],this.model.S_L[4 + i + j*24],this.model.S_M[4 + i + j*24],this.model.S_N[4 + i + j*24]);

      //TODO?
      // this.model.S_P[4 + i + j*24]
      // this.model.S_Q[4 + i + j*24]

      this.model.S_T[4 + i + j*24] = this.model.E[7+i] * this.model.E[4] / 100.0;

      if (i == 0 && j == 0) 
      {
        this.model.S_R[4] = Math.min(this.model.S_D[4], this.model.S_O[4]);
        this.model.S_S[4] = this.model.S_D[4] - this.model.S_R[4];

      }
      else
      {
      this.model.S_R[4 + i + j*24] = Math.min(this.model.S_D[4 + i + j*24] + this.model.S_S[4 + i + j*24 - 1], this.model.S_O[4 + i + j*24])
      //console.log("S_R[" + (4 + i + j*24).toString() + "]: " + this.model.S_R[4 + i + j*24].toString());
      this.model.S_S[4 + i + j*24] = this.model.S_S[4 + i + j*24 - 1] + this.model.S_D[4 + i + j*24] - this.model.S_R[4 + i + j*24];
      //console.log("S_S[" + (4 + i + j*24).toString() + "]: " + this.model.S_S[4 + i + j*24].toString())
      }
      this.model.S_U[4 + i + j*24] = this.model.S_R[4 + i + j*24] / this.model.S_J[4 + i + j*24] ;
      this.model.S_V[4 + i + j*24] = this.model.S_R[4 + i + j*24] / this.model.S_K[4 + i + j*24] ;
      this.model.S_W[4 + i + j*24] = this.model.S_R[4 + i + j*24] / this.model.S_L[4 + i + j*24] ;
      this.model.S_X[4 + i + j*24] = this.model.S_R[4 + i + j*24] / this.model.S_M[4 + i + j*24] ;
      this.model.S_Y[4 + i + j*24] = this.model.S_O[4 + i + j*24] / this.model.S_N[4 + i + j*24] ;

      this.model.S_AA[4 + i + j*24] = this.model.S_D[4 + i + j*24]
      if (i ==0 && j == 0) this.model.S_AB[4 + i + j*24] = this.model.S_AA[4 + i + j*24];
      else this.model.S_AB[4 + i + j*24] = this.model.S_AB[4 + i + j*24 - 1] + this.model.S_AA[4 + i + j*24];

      this.model.S_AC[4 + i + j*24] = this.model.S_J[4 + i + j*24];


      if (i == 0 && j == 0) 
      {
        this.model.S_AD[4] = Math.min(this.model.S_AA[4], this.model.S_AC[4]);
        this.model.S_AE[4] = this.model.S_AA[4] - this.model.S_AD[4];
  
      }
      else
      {
        this.model.S_AD[4 + i + j*24] = Math.min(this.model.S_AA[4 + i + j*24] + this.model.S_AE[4 + i + j*24 - 1], this.model.S_AC[4 + i + j*24])
        this.model.S_AE[4 + i + j*24] = this.model.S_AE[4 + i + j*24 - 1] + this.model.S_AA[4 + i + j*24] - this.model.S_AD[4 + i + j*24];
      }
      this.model.S_AF[4 + i + j*24] = (this.model.S_B[4 + i + j*24] <= this.model.K[12] ? 0 : this.model.S_AD[4 + i + j*24 - Math.floor(this.model.K[12])]);
      if (i == 0 && j == 0) this.model.S_AG[4 + i + j*24] = this.model.S_AF[4 + i + j*24];
      else this.model.S_AG[4 + i + j*24] = this.model.S_AG[4 + i + j*24 - 1] + this.model.S_AF[4 + i + j*24];
      //console.log(this.model.S_AF[4 + i + j*24]);
      this.model.S_AH[4 + i + j*24] = this.model.S_AE[4 + i + j*24] / this.model.S_AC[4 + i + j*24]


      this.model.S_AJ[4 + i + j*24] = this.model.S_AF[4 + i + j*24];
      

    
      if ( i == 0 && j == 0) this.model.S_AT[4] = Math.max(0, Math.min(this.model.S_F[4] * this.model.N[7],
                                                                        this.model.S_G[4] * this.model.M[7]))
                                                                / (this.model.R[7] / 100.0);
      else this.model.S_AT[4 + i + j*24] = this.model.S_AT[4 + i + j*24 - 1] - this.model.S_AV[4 + i + j*24 - 1] +  this.model.S_AZ[4 + i + j*24 - 1]
      
      //console.log(this.model.S_AT[4] + " = Math.max(0, Math.min(" + this.model.S_F[4] + " * " + this.model.N[7] + ", " + this.model.S_G[4]+ " * " + this.model.M[7] + ")) / " + this.model.R[7]/100.0 ) 
      
      this.model.S_AU[4 + i + j*24] = Math.min(this.model.S_K[4 + i + j*24], this.model.S_L[4 + i + j*24]);
    

    
      if (i == 0 && j == 0) this.model.S_AK[4 + i + j*24] = 0;
      else this.model.S_AK[4 + i + j*24] = this.model.S_AK[4 + i + j*24 - 1] + this.model.S_AM[4 + i + j*24 - 1] + this.model.S_BR[4 + i + j*24 - 1] - this.model.S_AO[4 + i + j*24 - 1]

      //PO AK
      this.model.S_AL[4 + i + j*24] = this.model.S_H[4 + i + j*24] - this.model.S_AK[4 + i + j*24];

      //PO AL
       if (i == 0 && j == 0) this.model.S_AM[4 + i + j*24] = Math.min(this.model.S_AL[4 + i + j*24], this.model.S_AJ[4 + i + j*24]);
       else this.model.S_AM[4 + i + j*24] = Math.min(this.model.S_AL[4 + i + j*24], this.model.S_AJ[4 + i + j*24] + this.model.S_AP[4 + i + j*24 - 1]);
            
       this.model.S_AS[4 + i + j*24] = this.model.S_AM[4 + i + j*24];

       if ( i == 0 && j == 0) this.model.S_AV[4 + i + j*24] = Math.min(this.model.S_AS[4 + i + j*24], this.model.S_AU[4 + i + j*24], this.model.S_AT[4 + i + j*24] )
       else this.model.S_AV[4 + i + j*24] = Math.min(this.model.S_AS[4 + i + j*24] + this.model.S_AY[4 + i + j*24 - 1], this.model.S_AU[4 + i + j*24], this.model.S_AT[4 + i + j*24] )
       

       this.model.S_AZ[4 + i + j*24] = (this.model.S_B[4 + i + j*24] <= this.model.M[12] ? 0 : this.model.S_AV[4 + i + j*24 - Math.floor(this.model.M[12])]);
    
       if ( i == 0 && j == 0) this.model.S_BA[4 + i + j*24] = this.model.S_AZ[4 + i + j*24];
       else this.model.S_BA[4 + i + j*24] = this.model.S_AZ[4 + i + j*24] + this.model.S_BA[4 + i + j*24 - 1];
     

       if ( i == 0 && j == 0) this.model.S_AY[4 + i + j*24] = this.model.S_AS[4 + i + j*24] - this.model.S_AV[4 + i + j*24];
       else this.model.S_AY[4 + i + j*24] = this.model.S_AY[4 + i + j*24 - 1] + this.model.S_AS[4 + i + j*24] - this.model.S_AV[4 + i + j*24];
     

       if ( i == 0 && j == 0) this.model.S_AW[4 + i + j*24] = this.model.S_AV[4 + i + j*24];
       else this.model.S_AW[4 + i + j*24] = this.model.S_AV[4 + i + j*24] + this.model.S_AW[4 + i + j*24 - 1];

       this.model.S_AX[4 + i + j*24] = this.model.S_AW[4 + i + j*24] - this.model.S_BA[4 + i + j*24];

      this.model.S_BB[4 + i + j*24] = this.model.S_AV[4 + i + j*24] == this.model.S_AT[4 + i + j*24] ? this.model.S_AS[4 + i + j*24] - this.model.S_AV[4 + i + j*24]: 0;
      this.model.S_BC[4 + i + j*24] = this.model.S_AV[4 + i + j*24] == this.model.S_AU[4 + i + j*24] ? this.model.S_Q[4 + i + j*24] : 0;
      this.model.S_BD[4 + i + j*24] = this.model.S_AY[4 + i + j*24] / this.model.S_AU[4 + i + j*24];

      this.model.S_BF[4 + i + j*24] = this.model.R[4]/100.0 * this.model.S_AZ[4 + i + j*24] 
      this.model.S_BG[4 + i + j*24] = this.model.S_AZ[4 + i + j*24] - this.model.S_BF[4 + i + j*24];
      this.model.S_BH[4 + i + j*24] = (1 - this.model.R[5]/100.0) * this.model.S_BG[4 + i + j*24];
      this.model.S_BI[4 + i + j*24] = this.model.R[5]/100.0 * this.model.S_BG[4 + i + j*24];

      this.model.S_BK[4 + i + j*24] = this.model.S_BF[4 + i + j*24];

      if ( i == 0 && j == 0) this.model.S_BL[4 + i + j*24] = this.model.K[16];
      else this.model.S_BL[4 + i + j*24] = this.model.S_BL[4 + i + j*24 - 1] - this.model.S_BM[4 + i + j*24 - 1] + this.model.S_BN[4 + i + j*24 - 1]
    
      if ( i == 0 && j == 0) this.model.S_BM[4 + i + j*24] = Math.min(this.model.S_BK[4 + i + j*24], this.model.S_BL[4 + i + j*24])
      else this.model.S_BM[4 + i + j*24] = Math.min(this.model.S_BK[4 + i + j*24] + this.model.S_BP[4 + i + j*24 - 1], this.model.S_BL[4 + i + j*24])

      this.model.S_BN[4 + i + j*24] = (this.model.S_B[4 + i + j*24] <= this.model.O[12] ? 0 : this.model.S_BM[4 + i + j*24 - Math.floor(this.model.O[12])]);

      if ( i == 0 && j == 0) this.model.S_BO[4 + i + j*24] = this.model.S_BM[4 + i + j*24]
      else this.model.S_BO[4 + i + j*24] =  this.model.S_BO[4 + i + j*24 - 1] + this.model.S_BM[4 + i + j*24] - this.model.S_BN[4 + i + j*24];
    
      if ( i == 0 && j == 0) this.model.S_BP[4 + i + j*24] = this.model.S_BK[4 + i + j*24] - this.model.S_BM[4 + i + j*24]
      else this.model.S_BP[4 + i + j*24] = this.model.S_BP[4 + i + j*24 - 1] + this.model.S_BK[4 + i + j*24] - this.model.S_BM[4 + i + j*24]

      this.model.S_BQ[4 + i + j*24] = this.model.S_BN[4 + i + j*24] * (1 - this.model.R[5]/100.0);
      this.model.S_BR[4 + i + j*24] = this.model.S_BN[4 + i + j*24] - this.model.S_BQ[4 + i + j*24];
      this.model.S_BS[4 + i + j*24] = this.model.S_BP[4 + i + j*24] / this.model.S_BL[4];


      this.model.S_BU[4 + i + j*24] = this.model.S_BH[4 + i + j*24] + this.model.S_BQ[4 + i + j*24]
      this.model.S_BV[4 + i + j*24] = this.model.S_BI[4 + i + j*24] + this.model.S_BR[4 + i + j*24]
      this.model.S_BW[4 + i + j*24] = this.model.S_T[4 + i + j*24];

      if ( i == 0 && j == 0) this.model.S_BX[4 + i + j*24] = Math.min(this.model.S_BV[4 + i + j*24], this.model.S_BW[4 + i + j*24])
      else this.model.S_BX[4 + i + j*24] = Math.min(this.model.S_BV[4 + i + j*24] + this.model.S_BY[4 + i + j*24 - 1], this.model.S_BW[4 + i + j*24])

      if ( i == 0 && j == 0) this.model.S_BY[4 + i + j*24] = this.model.S_BV[4 + i + j*24] - this.model.S_BX[4 + i + j*24]
      else this.model.S_BY[4 + i + j*24] = this.model.S_BY[4 + i + j*24 - 1] + this.model.S_BV[4 + i + j*24] - this.model.S_BX[4 + i + j*24]

      if ( i == 0 && j == 0) this.model.S_BZ[4 + i + j*24] = this.model.S_BU[4 + i + j*24] + this.model.S_BX[4 + i + j*24]
      else this.model.S_BZ[4 + i + j*24] = this.model.S_BZ[4 + i + j*24 - 1] + this.model.S_BU[4 + i + j*24] + this.model.S_BX[4 + i + j*24]
    
      //console.log(this.model.S_BZ[4 + i + j*24] + " = " + this.model.S_BZ[4 + i + j*24 - 1] + " + " + this.model.S_BU[4 + i + j*24]  + " + " + this.model.S_BX[4 + i + j*24] )

      this.model.S_CA[4 + i + j*24] = this.model.S_BY[4 + i + j*24] / this.model.E[4];
    
      //PO AM
      if (i == 0 && j == 0) this.model.S_AN[4 + i + j*24] = this.model.S_AM[4 + i + j*24];
      else this.model.S_AN[4 + i + j*24] = this.model.S_AN[4 + i + j*24 - 1] + this.model.S_AM[4 + i + j*24]

      this.model.S_AO[4 + i + j*24] = this.model.S_BM[4 + i + j*24] + this.model.S_BH[4 + i + j*24] + this.model.S_BX[4 + i + j*24];
    
      //PO AM
      if (i == 0 && j == 0) this.model.S_AP[4 + i + j*24] = this.model.S_AJ[4 + i + j*24] - this.model.S_AM[4 + i + j*24];
      else this.model.S_AP[4 + i + j*24] = this.model.S_AP[4 + i + j*24 - 1] + this.model.S_AJ[4 + i + j*24] - this.model.S_AM[4 + i + j*24];

      //PO AP
      this.model.S_AQ[4 + i + j*24] = this.model.S_AP[4 + i + j*24]/this.model.S_H[4 + i + j*24];

      this.model.S_CC[4 + i + j*24] = this.model.S_AB[4 + i + j*24]  - this.model.S_BA[4 + i + j*24] ;
      this.model.S_CD[4 + i + j*24] = this.model.S_BO[4 + i + j*24];
      this.model.S_CE[4 + i + j*24] = this.model.S_BY[4 + i + j*24] ;

      this.model.S_CG[4 + i + j*24] = this.model.S_AE[4 + i + j*24] ;
      this.model.S_CH[4 + i + j*24] = this.model.S_AB[4 + i + j*24] - this.model.S_AG[4 + i + j*24] ;
      this.model.S_CI[4 + i + j*24] = this.model.S_AP[4 + i + j*24] ;
      this.model.S_CJ[4 + i + j*24] = this.model.S_AY[4 + i + j*24] ;
      this.model.S_CK[4 + i + j*24] = this.model.S_AX[4 + i + j*24] ;
      this.model.S_CL[4 + i + j*24] = this.model.S_BP[4 + i + j*24] ;
      this.model.S_CM[4 + i + j*24] = this.model.S_BO[4 + i + j*24] ;
      this.model.S_CN[4 + i + j*24] = this.model.S_BY[4 + i + j*24] ;
    
      this.model.S_CP[4 + i + j*24] = this.model.S_AB[4 + i + j*24] ;
      this.model.S_CQ[4 + i + j*24] = this.model.S_AG[4 + i + j*24] ;
      if (i == 0 && j == 0)  this.model.S_CR[4 + i + j*24] = this.model.S_AM[4 + i + j*24] ;
      else this.model.S_CR[4 + i + j*24] = this.model.S_CR[4 + i + j*24 - 1] + this.model.S_AM[4 + i + j*24];
      this.model.S_CS[4 + i + j*24] = this.model.S_AW[4 + i + j*24] ;
      this.model.S_CT[4 + i + j*24] = this.model.S_BA[4 + i + j*24] ;
      this.model.S_CU[4 + i + j*24] = this.model.S_BZ[4 + i + j*24] ;
    }

    this.model.S_D[124] = 0;
    for (let i = 100; i < 124; i++)
      this.model.S_D[124] += this.model.S_D[i];


      this.model.S_AZ[124] = 0;
      for (let i = 100; i < 124; i++)
      this.model.S_AZ[124] += this.model.S_AZ[i];
    
      this.model.S_BN[124] = 0;
      for (let i = 100; i < 124; i++)
      this.model.S_BN[124] += this.model.S_BN[i];

      this.model.S_BX[124] = 0;
      for (let i = 100; i < 124; i++)
      this.model.S_BX[124] += this.model.S_BX[i];

      this.model.S_CP[124] = this.model.S_CP[123] - this.model.S_CP[99];


      this.model.S_CC[124] = 0;
      for (let i = 28; i < 52; i++)
        this.model.S_CC[124] += this.model.S_CC[i]
      this.model.S_CC[125] = this.model.S_CC[124] / this.model.S_AZ[124]

      this.model.S_CD[124] = 0;
      for (let i = 28; i < 52; i++)
        this.model.S_CD[124] += this.model.S_CD[i]
      this.model.S_CD[125] = this.model.S_CD[124] / this.model.S_BN[124]

      this.model.S_CE[124] = 0;
      for (let i = 28; i < 52; i++)
        this.model.S_CE[124] += this.model.S_CE[i]
      this.model.S_CE[125] = this.model.S_CE[124] / this.model.S_BX[124]

      for (let i = 100; i < 124; i++)
        this.model.S_CV[i] = this.model.S_CP[i] - this.model.S_CU[i]

      this.model.S_CV[124] = 0;
      for (let i = 100; i < 124; i++)
        this.model.S_CV[124] += this.model.S_CV[i]

      this.model.S_CV[125] = this.model.S_CV[124] / this.model.S_CP[124]

      this.model.K[24] = this.model.S_CC[125]
      this.model.K[25] = this.model.S_CD[125]
      this.model.K[26] = this.model.S_CE[125]
      this.model.K[27] = this.model.S_CV[125]

      this.model.N[24] = this.model.S_AH[28];
      for (let i = 29; i < 52; i++) if (this.model.S_AH[i] > this.model.N[24]) this.model.N[24] = this.model.S_AH[i];
      this.model.N[25] = this.model.S_AP[28];
      for (let i = 29; i < 52; i++) if (this.model.S_AP[i] > this.model.N[25]) this.model.N[25] = this.model.S_AP[i];
      this.model.N[26] = this.model.S_AY[28];
      for (let i = 29; i < 52; i++) if (this.model.S_AY[i] > this.model.N[26]) this.model.N[26] = this.model.S_AY[i];
      this.model.N[27] = this.model.S_BP[28];
      for (let i = 29; i < 52; i++) if (this.model.S_BP[i] > this.model.N[27]) this.model.N[27] = this.model.S_BP[i];
      this.model.N[28] = this.model.S_BY[28];
      for (let i = 29; i < 52; i++) if (this.model.S_BY[i] > this.model.N[28]) this.model.N[28] = this.model.S_BY[i];


      this.model.S_AA[124] = 0;
      for (let i = 100; i < 124; i++)
      this.model.S_AA[124] += this.model.S_AA[i];

      this.model.S_AC[124] = 0;
      for (let i = 100; i < 124; i++)
      this.model.S_AC[124] += this.model.S_AC[i];


      this.model.S_AB[125] = this.model.S_AA[124] / this.model.S_AC[124]

      this.model.S_AK[124] = 0;
      for (let i = 100; i < 124; i++)
        this.model.S_AK[124] += this.model.S_AK[i];
      this.model.S_AK[124] /= 24;
      this.model.S_AK[125] = this.model.S_AK[124]/this.model.K[15];


      this.model.S_V[124] = 0;
      for (let i = 100; i < 124; i++)
        this.model.S_V[124] += this.model.S_V[i];
      this.model.S_V[124] /= 24;

      this.model.S_W[124] = 0;
      for (let i = 100; i < 124; i++)
        this.model.S_W[124] += this.model.S_W[i];
      this.model.S_W[124] /= 24;

      this.model.Q[24] = this.model.S_AB[125] * 100.0
      this.model.Q[25] = this.model.S_AK[125] * 100.0
      this.model.Q[26] = this.model.S_V[124] * 100.0
      this.model.Q[27] = this.model.S_W[124] * 100.0
 


    for (let i = 0; i < 24; i++)
    {
      this.model.S_CY[100 + i] = this.model.S_CP[100 + i]  - this.model.S_BZ[100];
      this.model.S_CZ[100 + i] = this.model.S_CQ[100 + i]  - this.model.S_BZ[100];
      this.model.S_DA[100 + i] = this.model.S_CR[100 + i]  - this.model.S_BZ[100];
      this.model.S_DB[100 + i] = this.model.S_CS[100 + i]  - this.model.S_BZ[100];
      this.model.S_DC[100 + i] = this.model.S_CT[100 + i]  - this.model.S_BZ[100];
      this.model.S_DD[100 + i] = this.model.S_CU[100 + i]  - this.model.S_BZ[100];

      /*
      console.log(
        this.model.S_CY[100 + i] + ", " +
        this.model.S_CZ[100 + i] + ", " +
        this.model.S_DA[100 + i] + ", " +
        this.model.S_DB[100 + i] + ", " +
        this.model.S_DC[100 + i] + ", " +
        this.model.S_DD[100 + i]
      )
      */
    }




    /*
    for (let i = 4; i < 124; i++)
    {
      console.log(
        this.model.S_A [i] + ", " +
        this.model.S_B [i] + ", " +
        this.model.S_C [i] + ", " +
        this.model.S_D [i] + ", " +
        this.model.S_E [i] + ", " +
        this.model.S_F [i] + ", " +
        this.model.S_G [i] + ", " +
        this.model.S_H [i] + ", " +
        this.model.S_I [i] + ", " +
        this.model.S_J [i] + ", " +
        this.model.S_K [i] + ", " +
        this.model.S_L [i] + ", " +
        this.model.S_M [i] + ", " +
        this.model.S_N [i] + ", " +
        this.model.S_O [i] + ", " +
        this.model.S_P [i] + ", " +
        this.model.S_Q [i] + ", " +
        this.model.S_R [i] + ", " +
        this.model.S_S [i] + ", " +
        this.model.S_T [i] + ", " +
        this.model.S_U [i] + ", " +
        this.model.S_V [i] + ", " +
        this.model.S_W [i] + ", " +
        this.model.S_X [i] + ", " +
        this.model.S_Y [i] + ", " +
        this.model.S_Z [i] + ", " +
        this.model.S_AA[i] + ", " +
        this.model.S_AB[i] + ", " +
        this.model.S_AC[i] + ", " +
        this.model.S_AD[i] + ", " +
        this.model.S_AE[i] + ", " +
        this.model.S_AF[i] + ", " +
        this.model.S_AG[i] + ", " +
        this.model.S_AH[i] + ", " +
        this.model.S_AI[i] + ", " +
        this.model.S_AJ[i] + ", " +
        this.model.S_AK[i] + ", " +
        this.model.S_AL[i] + ", " +
        this.model.S_AM[i] + ", " +
        this.model.S_AN[i] + ", " +
        this.model.S_AO[i] + ", " +
        this.model.S_AP[i] + ", " +
        this.model.S_AQ[i] + ", " +
        this.model.S_AR[i] + ", " +
        this.model.S_AS[i] + ", " +
        this.model.S_AT[i] + ", " +
        this.model.S_AU[i] + ", " +
        this.model.S_AV[i] + ", " +
        this.model.S_AW[i] + ", " +
        this.model.S_AX[i] + ", " +
        this.model.S_AY[i] + ", " +
        this.model.S_AZ[i] + ", " +
        this.model.S_BA[i] + ", " +
        this.model.S_BB[i] + ", " +
        this.model.S_BC[i] + ", " +
        this.model.S_BD[i] + ", " +
        this.model.S_BE[i] + ", " +
        this.model.S_BF[i] + ", " +
        this.model.S_BG[i] + ", " +
        this.model.S_BH[i] + ", " +
        this.model.S_BI[i] + ", " +
        this.model.S_BJ[i] + ", " +
        this.model.S_BK[i] + ", " +
        this.model.S_BL[i] + ", " +
        this.model.S_BM[i] + ", " +
        this.model.S_BN[i] + ", " +
        this.model.S_BO[i] + ", " +
        this.model.S_BP[i] + ", " +
        this.model.S_BQ[i] + ", " +
        this.model.S_BR[i] + ", " +
        this.model.S_BS[i] + ", " +
        this.model.S_BT[i] + ", " +
        this.model.S_BU[i] + ", " +
        this.model.S_BV[i] + ", " +
        this.model.S_BW[i] + ", " +
        this.model.S_BX[i] + ", " +
        this.model.S_BY[i] + ", " +
        this.model.S_BZ[i] + ", " +
        this.model.S_CA[i] + ", " +
        this.model.S_CB[i] + ", " +
        this.model.S_CC[i] + ", " +
        this.model.S_CD[i] + ", " +
        this.model.S_CE[i] + ", " +
        this.model.S_CF[i] + ", " +
        this.model.S_CG[i] + ", " +
        this.model.S_CH[i] + ", " +
        this.model.S_CI[i] + ", " +
        this.model.S_CJ[i] + ", " +
        this.model.S_CK[i] + ", " +
        this.model.S_CL[i] + ", " +
        this.model.S_CM[i] + ", " +
        this.model.S_CN[i] + ", " +
        this.model.S_CO[i] + ", " +
        this.model.S_CP[i] + ", " +
        this.model.S_CQ[i] + ", " +
        this.model.S_CR[i] + ", " +
        this.model.S_CS[i] + ", " +
        this.model.S_CT[i] + ", " +
        this.model.S_CU[i] + ", " +
        this.model.S_CV[i] + ", " +
        this.model.S_CW[i] + ", " +
        this.model.S_CX[i] + ", " +
        this.model.S_CY[i] + ", " +
        this.model.S_CZ[i] + ", " +
        this.model.S_DA[i] + ", " +
        this.model.S_DB[i] + ", " +
        this.model.S_DC[i] + ", " +
        this.model.S_DD[i]

      )
    }
    */

  }

  defaultData() {

    this.model.C[35] = 100;
    this.model.C[36] = 105;
    this.model.C[37] = 110;
    for (let i = 38; i < 50; i++)
      this.model.C[i] = 120;

    this.model.G[35] = 30000;

    this.model.E[4] = 30;

    this.model.F[42] = 2;
    this.model.F[43] = 1.48292563634017;
    this.model.F[44] = 1.32804380166974;
    this.model.F[45] = 1.13240358945445;
    this.model.F[46] = 1.05428336582682;
    this.model.F[47] = 1.03594209593163;
    this.model.F[48] = 1.11270370697444;
    this.model.F[49] = 1.83684421468796;
    this.model.F[50] = 3.50725838773445;
    this.model.F[51] = 5.73470372056056;
    this.model.F[52] = 7.52875163882643;
    this.model.F[53] = 8.21485099416476;
    this.model.F[54] = 7.58988920514371;
    this.model.F[55] = 6.51726456942171;
    this.model.F[56] = 5.84950648397856;
    this.model.F[57] = 6.02952265146832;
    this.model.F[58] = 6.3780067794768;
    this.model.F[59] = 6.26116609718156;
    this.model.F[60] = 5.78633099878404;
    this.model.F[61] = 5.31149590038652;
    this.model.F[62] = 4.71370636306204;
    this.model.F[63] = 3.9216352261071;
    this.model.F[64] = 3.14722605275493;
    this.model.F[65] = 2.5283780203656;

    this.model.H[42] = 16.4636673029502;
    this.model.H[43] = 14.7341534824637;
    this.model.H[44] = 14.4739791724691;
    this.model.H[45] = 14.5398718828333;
    this.model.H[46] = 14.6512781147892;
    this.model.H[47] = 12.8450026832599;
    this.model.H[48] = 12.2920473612347;

    this.model.E[15] = 30;
    this.model.E[16] = 30;
    this.model.E[24] = 20;
    this.model.E[25] = 20;

    this.model.T[15] = 30;
    this.model.T[16] = 30;
    this.model.T[24] = 20;
    this.model.T[25] = 20;

    for (let i = 0; i < 24; i++)
      this.model.F[i + 7] = 1;

    for (let i = 0; i < 24; i++)
      this.model.G[i + 7] = 6;

    for (let i = 0; i < 12; i++)
      this.model.G[i + 13] = 15;

    for (let i = 0; i < 24; i++)
      this.model.H[i + 7] = 6;

    for (let i = 0; i < 12; i++)
      this.model.H[i + 13] = 15;

    this.model.H[24] = 11;

    this.model.K[5] = 5;
    this.model.L[5] = 3;
    this.model.M[5] = 43.6683856749311;
    this.model.N[5] = 47.5353305785124;

    this.model.K[7] = 1;
    this.model.L[7] = 1;
    this.model.M[7] = 6;
    this.model.N[7] = 6;
    this.model.O[7] = 1;

    this.model.O[10] = 12;

    this.model.K[15] = 60;
    this.model.K[16] = 10;

    this.model.O[42] = 100;
    this.model.O[43] = 1.31322314049587;
    this.model.O[44] = 14.6321212121212;
    this.model.O[45] = 44.884738292011;
    this.model.O[46] = 31.6226170798898;
    this.model.O[47] = 7.54396694214876;

    this.model.P[42] = 5;

    this.model.Q[43] = 6;
    this.model.Q[44] = 6;
    this.model.Q[45] = 5;
    this.model.Q[46] = 2.5;
    this.model.Q[47] = 1.5;

    this.model.R[43] = 76;
    this.model.R[44] = 76;
    this.model.R[45] = 48;
    this.model.R[46] = 27;
    this.model.R[47] = 18;
    this.model.R[48] = 72;

    this.model.S[42] = 3;
    this.model.S[43] = 98;
    this.model.S[44] = 85;
    this.model.S[45] = 41;
    this.model.S[46] = 23;
    this.model.S[47] = 15;
    this.model.S[48] = 72;

    this.model.T[48] = 12;

    this.model.R[4] = 11;
    this.model.R[5] = 30;
    this.model.R[7] = 50;

    this.model.J[39] = 1;

    this.onSubmit();
  }
}
