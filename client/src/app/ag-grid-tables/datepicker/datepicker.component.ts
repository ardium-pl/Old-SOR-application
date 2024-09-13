import { Component, inject, model } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-datepicker',
  providers: [provideNativeDateAdapter()],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
})
export class DatepickerComponent {
  readonly value = model < Date | null>(null);
}
