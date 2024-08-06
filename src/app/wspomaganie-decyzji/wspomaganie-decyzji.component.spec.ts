import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WspomaganieDecyzjiComponent } from './wspomaganie-decyzji.component';

describe('WspomaganieDecyzjiComponent', () => {
  let component: WspomaganieDecyzjiComponent;
  let fixture: ComponentFixture<WspomaganieDecyzjiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WspomaganieDecyzjiComponent]
    });
    fixture = TestBed.createComponent(WspomaganieDecyzjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
