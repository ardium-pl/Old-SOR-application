import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesDiagnozowaniaComponent } from './proces-diagnozowania.component';

describe('ProcesDiagnozowaniaComponent', () => {
  let component: ProcesDiagnozowaniaComponent;
  let fixture: ComponentFixture<ProcesDiagnozowaniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcesDiagnozowaniaComponent]
    });
    fixture = TestBed.createComponent(ProcesDiagnozowaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
