import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErgonomiaPracyComponent } from './ergonomia-pracy.component';

describe('ErgonomiaPracyComponent', () => {
  let component: ErgonomiaPracyComponent;
  let fixture: ComponentFixture<ErgonomiaPracyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErgonomiaPracyComponent]
    });
    fixture = TestBed.createComponent(ErgonomiaPracyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
