import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Projekt2RoutingModule } from './projekt2-routing.module';
import { Tabela1Component } from './tabela1/tabela1.component';
import { Projekt2ViewComponent } from './projekt2-view/projekt2-view.component';

import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    Tabela1Component,
    Projekt2ViewComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    Projekt2RoutingModule,
    FormsModule,
    MatIconModule,

  ]
})
export class Projekt2Module { }
