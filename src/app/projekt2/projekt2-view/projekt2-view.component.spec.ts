import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projekt2ViewComponent } from './projekt2-view.component';

describe('Projekt2ViewComponent', () => {
  let component: Projekt2ViewComponent;
  let fixture: ComponentFixture<Projekt2ViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Projekt2ViewComponent]
    });
    fixture = TestBed.createComponent(Projekt2ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
