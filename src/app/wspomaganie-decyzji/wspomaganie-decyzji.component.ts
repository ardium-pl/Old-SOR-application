import { Component } from '@angular/core';
import { Tabela11 } from '../projekt1/tabela1-1';

@Component({
  selector: 'app-wspomaganie-decyzji',
  templateUrl: './wspomaganie-decyzji.component.html',
  styleUrls: ['./wspomaganie-decyzji.component.scss']
})
export class WspomaganieDecyzjiComponent {

  przetworzone = false;
  przetworz() {
    this.przetworzone = true;
    this.onSubmit();
  }

  ngOnInit()
  {
    this.defaultData();
  }

  model = new Tabela11("Dodawanie");
  submitted = false;
  waskie:string = "";

  onSubmit() {
    this.model.wynik = this.model.pole1 + this.model.pole2;

    this.model.G16 = this.model.G7/100.0 * this.model.F7 + this.model.G8/100.0 * this.model.F8 + this.model.G9/100.0 * this.model.F9 + this.model.G10/100.0 * this.model.F10 + this.model.G11/100.0 * this.model.F11
      + this.model.G12/100.0 * this.model.F12 + this.model.G13/100.0 * this.model.F13 + this.model.G14/100.0 * this.model.F14 + this.model.G15/100.0 * this.model.F15;

      this.model.H16 = this.model.H7/100.0 * this.model.F7 + this.model.H8/100.0 * this.model.F8 + this.model.H9/100.0 * this.model.F9 + this.model.H10/100.0 * this.model.F10 + this.model.H11/100.0 * this.model.F11
      + this.model.H12/100.0 * this.model.F12 + this.model.H13/100.0 * this.model.F13 + this.model.H14/100.0 * this.model.F14 + this.model.H15/100.0 * this.model.F15;

      this.model.I16 = this.model.I7/100.0 * this.model.F7 + this.model.I8/100.0 * this.model.F8 + this.model.I9/100.0 * this.model.F9 + this.model.I10/100.0 * this.model.F10 + this.model.I11/100.0 * this.model.F11
      + this.model.I12/100.0 * this.model.F12 + this.model.I13/100.0 * this.model.F13 + this.model.I14/100.0 * this.model.F14 + this.model.I15/100.0 * this.model.F15;

      this.model.J16 = this.model.J7/100.0 * this.model.F7 + this.model.J8/100.0 * this.model.F8 + this.model.J9/100.0 * this.model.F9 + this.model.J10/100.0 * this.model.F10 + this.model.J11/100.0 * this.model.F11
      + this.model.J12/100.0 * this.model.F12 + this.model.J13/100.0 * this.model.F13 + this.model.J14/100.0 * this.model.F14 + this.model.J15/100.0 * this.model.F15;

      this.model.K16 = this.model.K7/100.0 * this.model.F7 + this.model.K8/100.0 * this.model.F8 + this.model.K9/100.0 * this.model.F9 + this.model.K10/100.0 * this.model.F10 + this.model.K11/100.0 * this.model.F11
      + this.model.K12/100.0 * this.model.F12 + this.model.K13/100.0 * this.model.F13 + this.model.K14/100.0 * this.model.F14 + this.model.K15/100.0 * this.model.F15;

      this.model.M16 = this.model.M7/100.0 * this.model.F7 + this.model.M8/100.0 * this.model.F8 + this.model.M9/100.0 * this.model.F9 + this.model.M10/100.0 * this.model.F10 + this.model.M11/100.0 * this.model.F11
      + this.model.M12/100.0 * this.model.F12 + this.model.M13/100.0 * this.model.F13 + this.model.M14/100.0 * this.model.F14 + this.model.M15/100.0 * this.model.F15;

      this.model.G17 = 60.0/this.model.G15;
      this.model.H17 = this.model.H15/this.model.H16;
      this.model.I17 = this.model.I15*60.0/this.model.I16;
      this.model.J17 = this.model.J15*60.0/this.model.J16;
      this.model.K17 = this.model.K15/this.model.K16;
      this.model.M17 = this.model.M15/this.model.M16;
      this.model.N17 = this.model.N14/(this.model.F14/100.0);

      this.model.E19 = Math.min(this.model.G17,this.model.H17,this.model.I17,this.model.J17,this.model.K17)

      this.model.G18 = (this.model.E19 == this.model.G17 ? 0 : 1);
      this.model.H18 = (this.model.E19 == this.model.H17 ? 0 : 1);
      this.model.I18 = (this.model.E19 == this.model.I17 ? 0 : 1);
      this.model.J18 = (this.model.E19 == this.model.J17 ? 0 : 1);
      this.model.K18 = (this.model.E19 == this.model.K17 ? 0 : 1);
      this.model.M18 = (this.model.E19 == this.model.M17 ? 0 : 1);
      this.model.N18 = (this.model.E19 == this.model.N17 ? 0 : 1);

      this.model.G20 = this.model.E19/this.model.G17*100.0;
      this.model.H20 = this.model.E19/this.model.H17*100.0;
      this.model.I20 = this.model.E19/this.model.I17*100.0;
      this.model.J20 = this.model.E19/this.model.J17*100.0;
      this.model.K20 = this.model.E19/this.model.K17*100.0;
      this.model.M20 = this.model.E19/this.model.M17*100.0;
      this.model.N20 = this.model.E19/this.model.N17*100.0;
      
      switch(Math.min(this.model.G17, this.model.H17, this.model.I17, this.model.J17, this.model.K17))
      {
        case(this.model.G17): this.waskie = "Triage"; break;
        case(this.model.H17): this.waskie = "Łóżko"; break;
        case(this.model.I17): this.waskie = "Lekarz"; break;
        case(this.model.J17): this.waskie = "Pielęgn."; break;
        case(this.model.K17): this.waskie = "Łóżko obserw."; break;
      }
  }

  defaultData()
  {
    this.model.F7 = 100.0;
    this.model.F8 = 1.31322314049587;
    this.model.F9 = 14.6321212121212;
    this.model.F10 = 44.884738292011;
    this.model.F11 = 31.6226170798898;
    this.model.F12 = 7.54396694214876;
    this.model.F13 = 11.0;
    this.model.F14 = 40.0;

    this.model.G7 = 5;
    this.model.G15 = 2;

    this.model.H8 = 6;
    this.model.H9 = 6;
    this.model.H10 = 5;
    this.model.H11 = 2.5;
    this.model.H12 = 1.5;
    this.model.H15 = 50;

    this.model.I7 = 0;
    this.model.I8 = 90;
    this.model.I9 = 60;
    this.model.I10 = 40;
    this.model.I11 = 20;
    this.model.I12 = 20;
    this.model.I13 = 72;
    this.model.I15 = 6;

    this.model.J7 = 0;
    this.model.J8 = 120;
    this.model.J9 = 90;
    this.model.J10 = 40;
    this.model.J11 = 10;
    this.model.J12 = 10;
    this.model.J13 = 72;
    this.model.J15 = 8;


    this.model.K13 = 12;
    this.model.K15 = 20;

    this.model.M14 = 6;
    this.model.M15 = 30;

    this.model.N14 = 5;
    
    this.onSubmit();
  }
}
