import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabela4Component } from './tabela4.component';

describe('Tabela4Component', () => {
  let component: Tabela4Component;
  let fixture: ComponentFixture<Tabela4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tabela4Component]
    });
    fixture = TestBed.createComponent(Tabela4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
