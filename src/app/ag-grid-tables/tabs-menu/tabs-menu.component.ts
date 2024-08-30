import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-menu',
  templateUrl: './tabs-menu.component.html',
  styleUrl: './tabs-menu.component.scss',
})
export class TabsMenuComponent {
  readonly selectedTabIndex = 1;
  title = 'SOR';

  onChange(event: any) {
    // console.log(event);
  }
}
