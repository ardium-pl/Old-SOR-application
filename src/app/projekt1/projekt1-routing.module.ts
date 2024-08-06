import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tabela1Component } from './tabela1/tabela1.component';
import { Projekt1ViewComponent } from './projekt1-view/projekt1-view.component';
import { Tabela2Component } from './tabela2/tabela2.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from '../auth/auth.guard';
import { Tabela3Component } from './tabela3/tabela3.component';
import { Tabela4Component } from './tabela4/tabela4.component';

const routes: Routes = [
  {
    path: 'projekt1',
    component: Projekt1ViewComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'tabela1', component: Tabela1Component, canActivate: [AuthGuard]},
      {path: 'tabela2', component: Tabela2Component, canActivate: [AuthGuard]},
      {path: 'tabela3', component: Tabela3Component, canActivate: [AuthGuard]},
      {path: 'tabela4', component: Tabela4Component, canActivate: [AuthGuard]},
      {path: '', component: MenuComponent, canActivate: [AuthGuard]}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Projekt1RoutingModule { }
