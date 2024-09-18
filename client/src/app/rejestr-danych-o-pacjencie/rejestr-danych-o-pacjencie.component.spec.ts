import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejestrDanychOPacjencieComponent } from './rejestr-danych-o-pacjencie.component';

describe('RejestrDanychOPacjencieComponent', () => {
  let component: RejestrDanychOPacjencieComponent;
  let fixture: ComponentFixture<RejestrDanychOPacjencieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejestrDanychOPacjencieComponent]
    });
    fixture = TestBed.createComponent(RejestrDanychOPacjencieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
