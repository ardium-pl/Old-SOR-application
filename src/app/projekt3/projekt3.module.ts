import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabela1Component } from './tabela1/tabela1.component';
import { Projekt3RoutingModule } from './projekt3-routing.module';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    Tabela1Component
  ],
  imports: [
    CommonModule,
    Projekt3RoutingModule,
    FormsModule,
    MatIconModule
  ]
})
export class Projekt3Module { }
