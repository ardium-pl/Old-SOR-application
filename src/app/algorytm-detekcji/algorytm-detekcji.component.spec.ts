import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorytmDetekcjiComponent } from './algorytm-detekcji.component';

describe('AlgorytmDetekcjiComponent', () => {
  let component: AlgorytmDetekcjiComponent;
  let fixture: ComponentFixture<AlgorytmDetekcjiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlgorytmDetekcjiComponent]
    });
    fixture = TestBed.createComponent(AlgorytmDetekcjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
