import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeryfikacjaStanuPacjentaComponent } from './weryfikacja-stanu-pacjenta.component';

describe('WeryfikacjaStanuPacjentaComponent', () => {
  let component: WeryfikacjaStanuPacjentaComponent;
  let fixture: ComponentFixture<WeryfikacjaStanuPacjentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeryfikacjaStanuPacjentaComponent]
    });
    fixture = TestBed.createComponent(WeryfikacjaStanuPacjentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
