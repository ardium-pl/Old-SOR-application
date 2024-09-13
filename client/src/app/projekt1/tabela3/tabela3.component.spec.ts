import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabela3Component } from './tabela3.component';

describe('Tabela3Component', () => {
  let component: Tabela3Component;
  let fixture: ComponentFixture<Tabela3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tabela3Component]
    });
    fixture = TestBed.createComponent(Tabela3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
