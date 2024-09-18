import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPacjentaComponent } from './panel-pacjenta.component';

describe('PanelPacjentaComponent', () => {
  let component: PanelPacjentaComponent;
  let fixture: ComponentFixture<PanelPacjentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelPacjentaComponent]
    });
    fixture = TestBed.createComponent(PanelPacjentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
