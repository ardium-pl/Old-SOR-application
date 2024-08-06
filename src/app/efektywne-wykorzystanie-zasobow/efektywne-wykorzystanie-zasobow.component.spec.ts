import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfektywneWykorzystanieZasobowComponent } from './efektywne-wykorzystanie-zasobow.component';

describe('EfektywneWykorzystanieZasobowComponent', () => {
  let component: EfektywneWykorzystanieZasobowComponent;
  let fixture: ComponentFixture<EfektywneWykorzystanieZasobowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EfektywneWykorzystanieZasobowComponent]
    });
    fixture = TestBed.createComponent(EfektywneWykorzystanieZasobowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
