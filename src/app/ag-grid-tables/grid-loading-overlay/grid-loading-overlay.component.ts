import { Component } from '@angular/core';
import { ILoadingOverlayAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-grid-loading-overlay',
  templateUrl: './grid-loading-overlay.component.html',
  styleUrl: './grid-loading-overlay.component.scss',
})
export class GridLoadingOverlayComponent implements ILoadingOverlayAngularComp {
  agInit(): void {}
}
