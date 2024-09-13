import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SygnalizowanieAnomaliiComponent } from './sygnalizowanie-anomalii.component';

describe('SygnalizowanieAnomaliiComponent', () => {
  let component: SygnalizowanieAnomaliiComponent;
  let fixture: ComponentFixture<SygnalizowanieAnomaliiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SygnalizowanieAnomaliiComponent]
    });
    fixture = TestBed.createComponent(SygnalizowanieAnomaliiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
