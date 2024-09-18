import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rejestr-danych-o-pacjencie',
  templateUrl: './rejestr-danych-o-pacjencie.component.html',
  styleUrls: ['./rejestr-danych-o-pacjencie.component.scss']
})
export class RejestrDanychOPacjencieComponent {
  krok = 0;
  pytanieDocelowe =  [
      "Jaki procent pacjentów przyjętych w tym tygodniu z powodu duszności został zdiagnozowany z Covid-19?",
      "Jaki procent pacjentów zdiagnozowanych z Covid-19 wymagało tlenoterapii z użyciem respiratora?",
      "Czy Natalia Kowalska (PESEL: 57080920704 ) była w ostatnich 5 latach przyjęta na SOR z powodu duszności spoczynkowej i/lub bólu dławicowego? Jeżeli tak, to ile razy?",
      "Co było wtedy zdiagnozowaną przyczyną duszności spoczynkowej u tej pacjentki?",
      "Jakie leki pacjentka aktualnie przyjmuje?",
      
  ]
  odpowiedzDocelowa = [  
    "75% pacjentów przyjętych w tym tygodniu z powodu duszności zostało zdiagnozowanych z Covid-19. W pozostałych 25% diagnozowano głównie zawał serca i obecność ciała obcego w tchawicy. <br> <br>Czy masz jeszcze jakieś pytanie?",
    "Tlenoterapii z użyciem respiratora wymagało 40% pacjentów zdiagnozowanych z Covid-19.",
    "Natalia Kowalska (PESEL: 57080920704 ) była przyjęta na SOR 1 raz z powodu duszności spoczynkowej 15 lutego 2023 roku o godzinie 9:03.",
    "Zawał STEMI ściany dolnej i bocznej serca.",
    "Leki na receptę są aktualnie przyjmowane przez pacjentkę: <br>1.     Efient – recepta niezrealizowana <br>2.     Atorvasterol <br>3.     Captopril <br>4.     Nebilet <br>5.     Jardiance",
  ]
  odpowiedz = [
    "",
    "",
    "",
    "",
    "",
]
  pytanie = [
    "",
    "",
    "",
    "",
    "",
]
  counter = [
    0,
    0,
    0,
    0,
    0,
  ];
  counter2 = [
    0,
    0,
    0,
    0,
    0,
  ];

  @ViewChild("virtualScroll", { static: true })
  virtualScrollViewport: CdkVirtualScrollViewport;

  pytanieWboxie=""

  setKrok(_krok: number) {
    this.krok = _krok;
  }

  private _scrollToBottom() {
    setTimeout(() => {
      this.virtualScrollViewport.scrollToIndex(
        50
      );
    });
  }

  send() {
    let i = this.krok;
    this.pytanieWboxie = ""
      var el: any = document.getElementById("guzik");
      el.disabled = true;
      setInterval(() => {

        if (this.counter2[i] < this.odpowiedzDocelowa[i].length) {
          this.odpowiedz[i] += this.odpowiedzDocelowa[i][this.counter2[i]];
          this.counter2[i] += 1;
          this._scrollToBottom();
        }
      }, 20);

      this.krok+=1;
      this._scrollToBottom();
  }

  wypelnijPytanie() {
    let i = this.krok;
    var myTimer = setInterval(() => {

      if (this.counter[i] < this.pytanieDocelowe[i].length) {
        this.pytanieWboxie += this.pytanieDocelowe[i][this.counter[i]];
        this.counter[i] += 1;
      }
      else {
        var el: any = document.getElementById("guzik")
        el.disabled = false;
        clearInterval(myTimer);
      }
    }, 50);

  }
}
