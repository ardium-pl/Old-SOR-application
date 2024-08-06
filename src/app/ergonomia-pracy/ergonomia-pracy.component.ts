import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTextComponent } from '../dialog-text/dialog-text.component';

@Component({
  selector: 'app-ergonomia-pracy',
  templateUrl: './ergonomia-pracy.component.html',
  styleUrls: ['./ergonomia-pracy.component.scss']
})
export class ErgonomiaPracyComponent {
  view = 0;
  tab = 1;
  
  constructor(private dialog: MatDialog) {

  }

  openAlertDialog(msg: string) {
    const dialogRef = this.dialog.open(DialogTextComponent,{
      data:{
        message: msg,
        buttons: true,
        buttonText: {
          cancel: 'Zamknij'
        }
      },
    });
  }

  setView(_view: number)
  {
    this.view = _view;
  }

  popup()
  {
    switch(this.wybor)
    {
      case 1:
        this.openAlertDialog("<h3>Przechowywanie i obsługa materiałów</h3>" +
        "<p>1. Zapewnić, aby trasy transportowe są równe, nie śliskie i pozbawione przeszkód.</p>" +
        "<p>2. Używać wielopoziomowych półek lub regałów i małych pojemników, aby zminimalizować ręczny transport materiałów.</p>" +
        "<p>3. Zapewnić, aby etykiety i znaki były dobrze widoczne, łatwe do odczytania i zrozumiałe.</p>" +
        "<p>4. Korzystać z wózków, wózków ręcznych i innych urządzeń na kółkach, umożliwiających wygodne przemieszczanie materiałów.</p>" +
        "<p>5. Zapewnić pojemniki na odpady umieszczone w dogodnym miejscu.</p>" +
        "<p>6. Zmienić układ obszarów roboczych, aby zminimalizować potrzebę przenoszenia materiałów.</p>"
        ) 
      break;
      case 2:
        this.openAlertDialog("<h3>Bezpieczeństwo maszyn i narzędzi ręcznych</h3>" +
        "<p>7. Stosować odpowiednio zamocowane osłony, aby zapobiec kontaktowi z niebezpiecznymi częściami maszyn i narzędzi.</p>" +
        "<p>8. Ustanowić procedury bezpiecznego obchodzenia się z ostrymi narzędziami i używać niezbędnych urządzeń zabezpieczających oraz bezpiecznych pojemników na odpady.</p>" +
        "<p>9. Zapewnić stałe miejsce dla każdego narzędzia używanego w opiece zdrowotnej.</p>" +
        "<p>10. Zapewnić bezpieczne połączenia okablowania maszyn, narzędzi i sprzętu.</p>" +
        "<p>11. Używać znaków ostrzegawczych, które użytkownicy będą interpretować łatwo i poprawnie.</p>" +
        "<p>12. Regularnie sprawdzać i konserwować maszyny i narzędzia.</p>"
        ) 
      break;
      case 3:
        this.openAlertDialog("<h3>Bezpieczna obsługa pacjenta</h3>" +
        "<p>13. Wprowadzić bezpieczne i niezawodne procedury przemieszczania osób.</p>" +
        "<p>14. Zapewnić przeszkolony personel i niezbędne urządzenia do przemieszczania, takie jak wózki inwalidzkie, oraz zapewnić, aby przestrzeń i trasy do przemieszczania były bezpieczne i pozbawione przeszkód.</p>" +
        "<p>15. Używać sprzętu do transportu, który jest bezpieczny, łatwy w użyciu i zapewnia bezpieczeństwo podczas przemieszczania pacjenta.</p>" +
        "<p>16. Używać bezpiecznych i dających pewność bezpieczeństwa urządzeń do podnoszenia podczas podnoszenia pacjentów.</p>" +
        "<p>17. W zakresie obsługi pacjenta wyjaśnić procedurę przemieszczanemu pacjentowi i wykonywać czynności obsługi, oznajmiając każdą czynność wyraźnym głosem i zapewniając sobie współpracę pacjenta.</p>" +
        "<p>18. Gdy do bezpiecznego przemieszczania pacjenta używany jest pojazd, należy upewnić się, że pojazd i jego kierowca mogą przeprowadzić transport w sposób bezpieczny i dających pewność bezpieczeństwa.</p>"
        ) 
      break;
      case 4:
        this.openAlertDialog("<h3>Stanowiska pracy</h3>" +
        "<p>19. Umieścić często używane materiały, narzędzia i elementy sterujące w łatwo dostępnym miejscu.</p>" +
        "<p>20. Ustawić wysokość roboczą dla każdego pracownika na poziomie jego łokci lub nieco poniżej.</p>" +
        "<p>21. Pozwolić pracownikom na jak najwięcej naprzemiennych zmian pozycji stojącej i siedzącej i zapewnić dobre regulowane krzesła z oparciem.</p>" +
        "<p>22. Zapewnić możliwość łatwego odróżnienia różnych urządzeń i elementów sterujących.</p>" +
        "<p>23. Oznaczyć przedmioty i sprzęt znakami lub kolorami, aby pomóc pracownikom zrozumieć, co mają zrobić.</p>" +
        "<p>24. Zapewnić jasne instrukcje i informacje niezbędne do bezpiecznej i wydajnej pracy w zakresie opieki oraz bezpiecznego podawania leków.</p>" 
        ) 
      break;
      case 5:
        this.openAlertDialog("<h3>Środowisko fizyczne</h3>" +
        "<p>25. Zapewnić pracownikom odpowiednie oświetlenie, aby przez cały czas mogli pracować wydajnie i komfortowo.</p>" +
        "<p>26. Zapewnić lokalne oświetlenie do precyzyjnej pracy. </p>" +
        "<p>27. Chronić pracowników przed nadmiernym ciepłem i zimnem.</p>" +
        "<p>28. Stosować systemy klimatyzacji, aby zapewnić w pomieszczeniach klimat sprzyjający zdrowiu i komfortowi ludzi.</p>" +
        "<p>29. Zapewnić, aby środowisko fizyczne w odwiedzanych domach i innych obiektach było bezpieczne i wygodne dla osób objętych opieką i specjalistów opieki.</p>" +
        "<p>30. Stosować przegrody, zasłony i inne rozwiązania chroniące prywatność osób objętych opieką.</p>"
        ) 
      break;
      case 6:
        this.openAlertDialog("<h3>Substancje i środki niebezpieczne</h3>" +
        "<p>31. Zapewnić izolację lub osłony na powodujące hałas maszyny lub części maszyn.</p>" +
        "<p>32. Oznakować i właściwie przechowywać pojemniki z niebezpiecznymi chemikaliami, aby zapewnić ostrzeżenia i bezpieczną obsługę.</p>" +
        "<p>33. Chronić pracowników przed zagrożeniami chemicznymi, aby mogli bezpiecznie i wydajnie wykonywać swoją pracę.</p>" +
        "<p>34. Chronić pracowników przed promieniowaniem jonizującym podczas prac w zakresie opieki.</p>" +
        "<p>35. Zapewnić bezpieczne osłony przed laserami i promieniowaniem ultrafioletowym, podczerwonym i innym niebezpiecznymi promieniowaniem.</p>" +
        "<p>36. Utrzymywać jakość powietrza tak, aby było ono czyste i zdrowe, bez szkodliwego wpływu na osoby objęte opieką i pracowników opieki.</p>"
        ) 
      break;
      case 7:
        this.openAlertDialog("<h3>Kontrola zakażeń</h3>" +
        "<p>37. Ustanowić procedury zapewnienia higieny rąk i higieniczne urządzenia do ich mycia.</p>" +
        "<p>38. Promować środki kontroli zakażeń, aby wyeliminować lub zmniejszyć ryzyko infekcji podczas pracy w zakresie opieki.</p>" +
        "<p>39. Zapewnić odpowiednie programy szczepień dla pracowników opieki o wyższym ryzyku zakażenia w pracy.</p>" +
        "<p>40. Dokonać wyboru i używać środków ochrony osobistej, które są odpowiednie do ochrony przed potencjalnymi zakażeniami.</p>" +
        "<p>41. Ustanowić procedury ochrony osób objętych opieką i pracowników opieki przed osobami zakażonymi.</p>" +
        "<p>42. Ustanowić i stosować plany awaryjne kontroli zakażeń, w tym plan ciągłości działania (ang. BCP, business continuity plan).</p>"
        ) 
      break;
      case 8:
        this.openAlertDialog("<h3>Zaplecze socjalne</h3>" +
        "<p>43. Zapewnić i utrzymywać w czystości toalety, umywalnie i szatnie, aby zapewnić dobre warunki sanitarne.</p>" +
        "<p>44. Zapewnić miejsca do picia i higieniczne miejsca do spożywania posiłków.</p>" +
        "<p>45. Zapewnić miejsca do odpoczynku zapewniające odświeżenie, a dla pracowników nocnej zmiany spokojne miejsca do drzemki.</p>" +
        "<p>46. Zapewnić właściwe użytkowanie i konserwację środków ochrony osobistej, w tym odpowiednie instrukcje, próby adaptacyjne i szkolenia.</p>" +
        "<p>47. Organizować nieformalne lub towarzyskie spotkania i zajęcia rekreacyjne, często przy odpowiednich okazjach.</p>" +
        "<p>48. Zapewnić odpowiednie zaplecze do spotkań i szkoleń.</p>"
        ) 
      break;
      case 9:
        this.openAlertDialog("<h3>Gotowość</h3>" +
        "<p>49. Stworzyć plany awaryjne, aby zapewnić prawidłowe postępowanie w nagłych przypadkach, łatwy dostęp do obiektów i szybką ewakuację.</p>" +
        "<p>50. Oznaczyć drogi ewakuacyjne i zapewnić, że są one wolne od przeszkód.</p>" +
        "<p>51. Zapewnić łatwy dostęp do sprzętu pierwszej pomocy i obiektów podstawowej opieki zdrowotnej w miejscu pracy.</p>" +
        "<p>52. Zapewnić wystarczającą ilość gaśnic w zasięgu ręki i upewnić się, że pracownicy wiedzą, jak z nich korzystać.</p>" +
        "<p>53. Prowadzić rejestr wypadków i zbierać informacje o istotnych zdarzeniach w celu poprawy bezpieczeństwa w miejscu pracy.</p>" +
        "<p>54. Promować komunikację i klimat wzajemnego wspierania się wśród menedżerów i pracowników oraz zapewnić dostęp do poradnictwa dotyczących zdrowia lub problemów osobistych pracowników</p>"
        ) 
      break;
      case 10:
        this.openAlertDialog("<h3>Organizacja pracy i bezpieczeństwo pacjentów</h3>" +
        "<p>55. Przeprowadzać krótkie spotkanie przed pracą, aby wspólnie zaplanować zadania i promować komunikację i klimat wzajemnego wspierania się wśród menedżerów i pracowników.</p>" +
        "<p>56. Ustalić harmonogramy pracy, aby uniknąć nadmiernych godzin pracy i zapewnić wystarczającą ilość okresów odpoczynku i krótkich przerw.</p>" +
        "<p>57. Dostosować obiekty, sprzęt i metody pracy do osób niepełnosprawnych, aby mogły one bezpiecznie i wydajnie wykonywać swoją pracę.</p>" +
        "<p>58. Zaplanować i wdrożyć praktyczne środki zapobiegania stresowi w pracy poprzez współpracę menedżerów i pracowników oraz zorganizować szkolenia z tych środków.</p>" +
        "<p>59. Promować bezpieczniejsze usługi opieki zdrowotnej i kulturę bezpieczeństwa pacjentów obejmującą personel, kierownictwo i pacjentów.</p>" +
        "<p>60. Wdrażać partycypacyjne doskonalenie miejsca pracy poprzez uczenie się się na przykładzie dobrych praktyk możliwych do stosowania w lokalnych warunkach.</p>"
        ) 
      break;

    }
    
  }

  wybor : number;
  wybory = [
    { text: 'Przechowywanie i obsługa materiałów', value: 1 },
    { text: 'Bezpieczeństwo maszyn i narzędzi ręcznych', value: 2 },
    { text: 'Bezpieczna obsługa pacjenta', value: 3 },
    { text: 'Stanowiska pracy', value: 4 },
    { text: 'Środowisko fizyczne', value: 5 },
    { text: 'Substancje i środki niebezpieczne', value: 6 },
    { text: 'Kontrola zakażeń', value: 7 },
    { text: 'Zaplecze socjalne', value: 8 },
    { text: 'Gotowość', value: 9 },
    { text: 'Organizacja pracy i bezpieczeństwo pacjentów', value: 10 },
  ];

  close(){
    this.wybor2 = 0;
  }
  wybor2 : number;
  wybory2 = [
    { text: '3. Zapewnić, aby trasy transportowe były równe, nie były śliskie i pozbawione były przeszkód', value: 1 },
    { text: '56. Ustalać grafiki pracy w taki sposób, aby uniknąć nadmiernych godzin pracy i zapewnić wystarczającą ilość okresów odpoczynku i krótkich przerw.', value: 2 },

  ];
}
