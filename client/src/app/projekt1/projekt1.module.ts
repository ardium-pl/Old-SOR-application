import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { Projekt1RoutingModule } from './projekt1-routing.module';
import { Tabela1Component } from './tabela1/tabela1.component';

import { FormsModule } from '@angular/forms';
import { Projekt1ViewComponent } from './projekt1-view/projekt1-view.component';
import { Tabela2Component } from './tabela2/tabela2.component';
import { MenuComponent } from './menu/menu.component';
import { Tabela3Component } from './tabela3/tabela3.component';

import { MatButtonModule } from '@angular/material/button';
import { Tabela4Component } from './tabela4/tabela4.component'
import { TwoDigitDecimaNumberDirective } from '../two-digit-decima-number.directive'

@NgModule({
  declarations: [
    Tabela1Component,
    Projekt1ViewComponent,
    Tabela2Component,
    MenuComponent,
    Tabela3Component,
    Tabela4Component,
    TwoDigitDecimaNumberDirective
  ],
  imports: [
    CommonModule,
    Projekt1RoutingModule,
    FormsModule,
    MatButtonModule,
  
  ],
  providers: [DecimalPipe],
  exports: [
    Tabela1Component
  ]
})
export class Projekt1Module { }
