import { Component, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellValueChangedEvent, ColDef, ColGroupDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { HourlyDataService } from '../hourly-data.service';
import { Hour } from '../interfaces/hour';
import { hourlyTableColDefs } from './col-defs-hourly';

@Component({
  selector: 'app-hourly-table',
  templateUrl: './hourly-table.component.html',
  styleUrl: './hourly-table.component.scss',
})
export class HourlyTableComponent {
  readonly hourlyDataService = inject(HourlyDataService);

  readonly defaultColDef: ColDef = {
    headerClass: 'grid-header grid-header-outer',
    cellDataType: 'number',
    cellClass: 'cell',
    sortable: false,
    resizable: true,
    minWidth: 100,
    flex: 1,
  };

  readonly columnDefs: (ColDef | ColGroupDef)[] = hourlyTableColDefs;
  readonly rowData = this.hourlyDataService.rowData;
  readonly summaryRowTop = this.hourlyDataService.summaryRowTop;
  readonly summaryRowBottom = this.hourlyDataService.summaryRowBottom;

  onCellValueChanged(event: CellValueChangedEvent) {
    // Get the changed row (=hour)
    const changedHour: Hour = event.data;
    // Apply calculations & update main signal
    this.hourlyDataService.applyHourCalculations(this.rowData(), changedHour);
  }

  private api!: GridApi;
  onGridReady = (event: GridReadyEvent) => {
    // Store the api for later use
    this.api = event.api;

    // Apply calculations
    this.hourlyDataService.applyHourCalculations(this.rowData());
  };
}
