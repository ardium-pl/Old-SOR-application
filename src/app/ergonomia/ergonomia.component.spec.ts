import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErgonomiaComponent } from './ergonomia.component';

describe('ErgonomiaComponent', () => {
  let component: ErgonomiaComponent;
  let fixture: ComponentFixture<ErgonomiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErgonomiaComponent]
    });
    fixture = TestBed.createComponent(ErgonomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
