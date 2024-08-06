import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projekt1ViewComponent } from './projekt1-view.component';

describe('Projekt1ViewComponent', () => {
  let component: Projekt1ViewComponent;
  let fixture: ComponentFixture<Projekt1ViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Projekt1ViewComponent]
    });
    fixture = TestBed.createComponent(Projekt1ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
