import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sygnalizowanie-anomalii',
  templateUrl: './sygnalizowanie-anomalii.component.html',
  styleUrls: ['./sygnalizowanie-anomalii.component.scss']
})
export class SygnalizowanieAnomaliiComponent {

  krok = 1;
  liczbaPacjentow: number;
  liczbaPacjentowCzerwonych: number;
  wybranaData: Date;
  wybranaGodzina: Time;
  currentDate : Date;
  numerDnia = 0;

  submitted = false;

  formularz: FormGroup;

  C = new Array<number>(24);
  E = new Array<number>(6);
  srObslugaNaTydzien = 140*7;
  srPlanowanaObslugaNaTydzien = 0;
  obslugaDzienna = 0;
  dataPrzekroczenia: Date;

  przekroczono = false;
  setKrok(_krok : number)
  {
    this.krok = _krok;
  }
  ngOnInit(){
    this.defaultData();
    this.currentDate = new Date();

    setInterval(() => {         //replaced function() by ()=>
      this.currentDate = new Date()
    }, 1000);


    this.formularz = new FormGroup({
      liczbaPacjentow: new FormControl(this.liczbaPacjentow, [
        Validators.required,
      ]),
      liczbaPacjentowCzerwonych: new FormControl(this.liczbaPacjentowCzerwonych, [
        Validators.required,
      ]),
      wybranaData: new FormControl(this.wybranaData, [
        Validators.required,
      ]),
      wybranaGodzina: new FormControl(this.wybranaGodzina, [
        Validators.required,
      ]),
    });
  }
  
  onSubmit()
  {
    this.submitted = true;
    console.log("test")
    if (this.formularz.invalid) {
      return;
    }

    this.wylicz();
    this.setKrok(2);
  }

  cDay2(date: Date)
  {
    let day = ""
    switch(date.getDay())
    {
      case (1): day = "Poniedziałek"; break;
      case (2): day = "Wtorek"; break;
      case (3): day = "Środa"; break;
      case (4): day = "Czwartek"; break;
      case (5): day = "Piątek"; break;
      case (6): day = "Sobota"; break;
      case (7): day = "Niedziela"; break;
    }
    return day;
  }

  cDay()
  {
    let day = ""
    switch(this.currentDate.getDay())
    {
      case (1): day = "Poniedziałek"; break;
      case (2): day = "Wtorek"; break;
      case (3): day = "Środa"; break;
      case (4): day = "Czwartek"; break;
      case (5): day = "Piątek"; break;
      case (6): day = "Sobota"; break;
      case (7): day = "Niedziela"; break;
    }
    return day;
  }

  get form_liczbaPacjentow() {
    return this.formularz.get('liczbaPacjentow')!;
  }

  get form_liczbaPacjentowCzerwonych() {
    return this.formularz.get('liczbaPacjentowCzerwonych')!;
  }

  get form_wybranaData() {
    return this.formularz.get('wybranaData')!;
  }

  get form_wybranaGodzina() {
    return this.formularz.get('wybranaGodzina')!;
  }

  cDate()
  {
     return this.currentDate.toISOString().split('T')[0];
  }

  cHour()
  {
    return this.currentDate.toISOString().split('T')[1].substring(0, 8);
  }

  addDays(date: Date, days:number) : Date {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  zalozenia_liczba_pacjentow = 0;

  wylicz()
  {

    const godzina = Number(this.wybranaGodzina.toString().split(':')[0]);
    const dzienTygodnia = new Date(this.wybranaData).getDay();
    console.log(this.liczbaPacjentow);
    console.log(this.liczbaPacjentowCzerwonych);
    console.log(dzienTygodnia);
    console.log(godzina);

    var procentSuma = 0;

    for (let i=0; i < godzina; i ++)
      procentSuma += this.C[i];

    this.zalozenia_liczba_pacjentow = 980*this.E[dzienTygodnia]/100.0 * procentSuma / 100.0;
    console.log(this.zalozenia_liczba_pacjentow);
    
    /*
    this.numerDnia = new Date(this.wybranaData).getDay();
    this.srPlanowanaObslugaNaTydzien = this.liczbaPacjentow*7;
    this.obslugaDzienna = 980 * this.E[this.numerDnia] / 100.0;

    console.log(this.srPlanowanaObslugaNaTydzien)
    console.log(this.obslugaDzienna)

    this.przekroczono = this.srPlanowanaObslugaNaTydzien > 980;

    if (this.przekroczono)
    {
      var i = 0;
      while ((++i) * this.liczbaPacjentow < 980)
      {}
      console.log("i: " + i.toString());


      this.dataPrzekroczenia = this.addDays(new Date(this.wybranaData), i);
    }
    

*/
  }

  defaultData()
  {
    this.C[0] = 2;
    this.C[1] = 1.48292563634017;
    this.C[2] = 1.32804380166974;
    this.C[3] = 1.13240358945445;
    this.C[4] = 1.05428336582682;
    this.C[5] = 1.03594209593163;
    this.C[6] = 1.11270370697444;
    this.C[7] = 1.83684421468796;
    this.C[8] = 3.50725838773445;
    this.C[9] = 5.73470372056056;
    this.C[10] = 7.52875163882643;
    this.C[11] = 8.21485099416476;
    this.C[12] = 7.58988920514371;
    this.C[13] = 6.51726456942171;
    this.C[14] = 5.84950648397856;
    this.C[15] = 6.02952265146832;
    this.C[16] = 6.3780067794768;
    this.C[17] = 6.26116609718156;
    this.C[18] = 5.78633099878404;
    this.C[19] = 5.31149590038652;
    this.C[20] = 4.71370636306204;
    this.C[21] = 3.9216352261071;
    this.C[22] = 3.14722605275493;
    this.C[23] = 2.5283780203656;

    this.E[0] = 12.2920473612347;
    this.E[1] = 16.4636673029502;
    this.E[2] = 14.7341534824637;
    this.E[3] = 14.4739791724691;
    this.E[4] = 14.5398718828333;
    this.E[5] = 14.6512781147892;
    this.E[6] = 12.8450026832599;
    
  }

  

}
