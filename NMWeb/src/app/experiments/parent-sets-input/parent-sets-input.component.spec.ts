import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSetsInputComponent } from './parent-sets-input.component';

describe('ParentSetsInputComponent', () => {
  let component: ParentSetsInputComponent;
  let fixture: ComponentFixture<ParentSetsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentSetsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentSetsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
