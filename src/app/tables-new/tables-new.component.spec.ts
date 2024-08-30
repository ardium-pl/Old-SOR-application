import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesNewComponent } from './tables-new.component';

describe('TablesNewComponent', () => {
  let component: TablesNewComponent;
  let fixture: ComponentFixture<TablesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablesNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
