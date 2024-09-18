import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tabela1Component } from './tabela1/tabela1.component';
import { Projekt2ViewComponent } from './projekt2-view/projekt2-view.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'projekt2',
    component: Projekt2ViewComponent,
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
export class Projekt2RoutingModule { }
