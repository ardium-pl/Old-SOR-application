import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { provideNativeDateAdapter } from '@angular/material/core';

import { AgGridTablesRoutingModule } from './ag-grid-tables-routing.module';

import { TabsMenuComponent } from './tabs-menu/tabs-menu.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { HourlyTableComponent } from './hourly-table/hourly-table.component';
import { LengthOfStayComponent } from './length-of-stay/length-of-stay.component';
import { StaticTableComponent } from './static-table/static-table.component';

import { AgGridModule } from 'ag-grid-angular';

import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    TabsMenuComponent,
    StaticTableComponent,
    LengthOfStayComponent,
    DatepickerComponent,
    HourlyTableComponent,
  ],
  imports: [
    AgGridModule,
    MatTabsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    AgGridTablesRoutingModule,
  ],
    
  providers: [provideNativeDateAdapter(), provideHttpClient(),],
})
export class AgGridTablesModule {}
