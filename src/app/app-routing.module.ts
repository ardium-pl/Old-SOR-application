import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate  } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { ErgonomiaComponent } from './ergonomia/ergonomia.component';
import { WeryfikacjaStanuPacjentaComponent } from './weryfikacja-stanu-pacjenta/weryfikacja-stanu-pacjenta.component';
import { ErgonomiaPracyComponent } from './ergonomia-pracy/ergonomia-pracy.component';
import { WspomaganieDecyzjiComponent } from './wspomaganie-decyzji/wspomaganie-decyzji.component';
import { SygnalizowanieAnomaliiComponent } from './sygnalizowanie-anomalii/sygnalizowanie-anomalii.component';
import { AlgorytmDetekcjiComponent } from './algorytm-detekcji/algorytm-detekcji.component';
import { UsprawnieniePlanowaniaZabiegowComponent } from './usprawnienie-planowania-zabiegow/usprawnienie-planowania-zabiegow.component';
import { PanelPacjentaComponent } from './panel-pacjenta/panel-pacjenta.component';
import { RejestrDanychOPacjencieComponent } from './rejestr-danych-o-pacjencie/rejestr-danych-o-pacjencie.component';
import { ProcesDiagnozowaniaComponent } from './proces-diagnozowania/proces-diagnozowania.component';
import { EfektywneWykorzystanieZasobowComponent } from './efektywne-wykorzystanie-zasobow/efektywne-wykorzystanie-zasobow.component';
import { TabsMenuComponent } from './ag-grid-tables/tabs-menu/tabs-menu.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'waskie-gardla-identyfikacja',
    component: TabsMenuComponent,
  },
  {
    path: 'ergonomia',
    component: ErgonomiaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'weryfikacja-stanu',
    component: WeryfikacjaStanuPacjentaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ergonomia-pracy',
    component: ErgonomiaPracyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'wspomaganie-decyzji',
    component: WspomaganieDecyzjiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sygnalizowanie-anomalii',
    component: SygnalizowanieAnomaliiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'algorytm-detekcji',
    component: AlgorytmDetekcjiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'usprawnienie-planowania-zabiegow',
    component: UsprawnieniePlanowaniaZabiegowComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'panel-pacjenta',
    component: PanelPacjentaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'rejestr-danych-o-pacjencie',
    component: RejestrDanychOPacjencieComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'proces-diagnozowania',
    component: ProcesDiagnozowaniaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'efektywne-wykorzystanie-zasobow',
    component: EfektywneWykorzystanieZasobowComponent,
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
