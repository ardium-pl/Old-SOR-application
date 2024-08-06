import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Projekt1Module } from './projekt1/projekt1.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Projekt2Module } from './projekt2/projekt2.module';
import { MainViewComponent } from './main-view/main-view.component';
import { Projekt3Module } from './projekt3/projekt3.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { LoginComponent } from './login/login.component';
import { Projekt4Module } from './projekt4/projekt4.module';
import { ErgonomiaComponent } from './ergonomia/ergonomia.component';
import { WeryfikacjaStanuPacjentaComponent } from './weryfikacja-stanu-pacjenta/weryfikacja-stanu-pacjenta.component';
import { ErgonomiaPracyComponent } from './ergonomia-pracy/ergonomia-pracy.component';
import { WspomaganieDecyzjiComponent } from './wspomaganie-decyzji/wspomaganie-decyzji.component';
import { SygnalizowanieAnomaliiComponent } from './sygnalizowanie-anomalii/sygnalizowanie-anomalii.component';
import { MatSelectModule } from '@angular/material/select';
import { DialogTextComponent } from './dialog-text/dialog-text.component';
import { AlgorytmDetekcjiComponent } from './algorytm-detekcji/algorytm-detekcji.component';
import { UsprawnieniePlanowaniaZabiegowComponent } from './usprawnienie-planowania-zabiegow/usprawnienie-planowania-zabiegow.component';
import { PanelPacjentaComponent } from './panel-pacjenta/panel-pacjenta.component';
import { RejestrDanychOPacjencieComponent } from './rejestr-danych-o-pacjencie/rejestr-danych-o-pacjencie.component';
import { ProcesDiagnozowaniaComponent } from './proces-diagnozowania/proces-diagnozowania.component';
import { MatTableModule } from '@angular/material/table';
import { EfektywneWykorzystanieZasobowComponent } from './efektywne-wykorzystanie-zasobow/efektywne-wykorzystanie-zasobow.component'; 
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    AlertDialogComponent,
    DialogTextComponent,
    LoginComponent,
    ErgonomiaComponent,
    WeryfikacjaStanuPacjentaComponent,
    ErgonomiaPracyComponent,
    WspomaganieDecyzjiComponent,
    SygnalizowanieAnomaliiComponent,
    AlgorytmDetekcjiComponent,
    UsprawnieniePlanowaniaZabiegowComponent,
    PanelPacjentaComponent,
    RejestrDanychOPacjencieComponent,
    ProcesDiagnozowaniaComponent,
    EfektywneWykorzystanieZasobowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Projekt1Module,
    Projekt2Module,
    Projekt3Module,
    Projekt4Module,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    MatRadioModule,
    MatCheckboxModule,
    ScrollingModule,
    MatButtonToggleModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
