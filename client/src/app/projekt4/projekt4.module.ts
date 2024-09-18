import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabela1Component } from './tabela1/tabela1.component';
import { Projekt4RoutingModule } from '../projekt4/projekt4-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Tabela1Component
  ],
  imports: [
    CommonModule,
    Projekt4RoutingModule,
    FormsModule
  ]
})
export class Projekt4Module { }
