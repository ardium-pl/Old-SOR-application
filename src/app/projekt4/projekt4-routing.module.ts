import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tabela1Component } from './tabela1/tabela1.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'projekt4',
    component: Tabela1Component, 
    canActivate: [AuthGuard],
    children: [
      {path: 'tabela1', component: Tabela1Component, canActivate: [AuthGuard]},
      {path: '', redirectTo: 'tabela1', pathMatch: 'full'}
    ]
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Projekt4RoutingModule { }
