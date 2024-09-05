import { Component, inject, signal } from '@angular/core';
import { DEFAULT_DATE } from '../constants';
import { DataFetchingService } from '../data-fetching.service';

@Component({
  selector: 'app-tabs-menu',
  templateUrl: './tabs-menu.component.html',
  styleUrl: './tabs-menu.component.scss',
})
export class TabsMenuComponent {
  readonly dataFetchingService = inject(DataFetchingService);
  readonly selectedTabIndex = 1;
  readonly title = 'SOR';

  readonly pickedDate = signal<Date | null>(DEFAULT_DATE);

  onDateChange(date: Date | null): void {
    if (!date) return;

    this.dataFetchingService.fetchRowData(date.toISOString());
  }

  ngOnInit() {
    console.log('Calling ngOnInit ...');
    this.dataFetchingService.fetchRowData(DEFAULT_DATE.toISOString());
  }
}
