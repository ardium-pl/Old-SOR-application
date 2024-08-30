import { Component, inject, model } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerInputEvent} from '@angular/material/datepicker';
import { HourlyDataService } from '../hourly-data.service';
import { DataFetchingService } from '../data-fetching.service';

@Component({
  selector: 'app-datepicker',
  providers: [provideNativeDateAdapter()],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
})
export class DatepickerComponent {
  readonly hourlyDataService = inject(HourlyDataService);
  readonly dataFetchingService = inject(DataFetchingService);
  readonly value = model<Date>();

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    const pickedDate = event.value;

    if (pickedDate) {
      console.log(`⚙️ Fetching table data ...`);

      // Update the currentDayOfWeek
      this.hourlyDataService.currentDayOfWeek.set(pickedDate.getDay());

      // Fetch table data from a database for a chosen day
      this.dataFetchingService.fetchRowData(pickedDate.toISOString());
    }
  }
}
