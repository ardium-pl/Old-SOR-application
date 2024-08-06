import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsprawnieniePlanowaniaZabiegowComponent } from './usprawnienie-planowania-zabiegow.component';

describe('UsprawnieniePlanowaniaZabiegowComponent', () => {
  let component: UsprawnieniePlanowaniaZabiegowComponent;
  let fixture: ComponentFixture<UsprawnieniePlanowaniaZabiegowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsprawnieniePlanowaniaZabiegowComponent]
    });
    fixture = TestBed.createComponent(UsprawnieniePlanowaniaZabiegowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
