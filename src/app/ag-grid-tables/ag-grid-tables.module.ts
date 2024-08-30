import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridTablesRoutingModule } from './ag-grid-tables-routing.module';
import { TabsMenuComponent } from './tabs-menu/tabs-menu.component';


@NgModule({
  declarations: [
    TabsMenuComponent
  ],
  imports: [
    CommonModule,
    AgGridTablesRoutingModule
  ]
})
export class AgGridTablesModule { }
