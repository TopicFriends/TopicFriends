import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettableInputComponent } from './settable-input.component';

describe('SettableInputComponent', () => {
  let component: SettableInputComponent;
  let fixture: ComponentFixture<SettableInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettableInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettableInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
