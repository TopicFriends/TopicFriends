import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckFirebaseQueryComponent } from './check-firebase-query.component';

describe('CheckFirebaseQueryComponent', () => {
  let component: CheckFirebaseQueryComponent;
  let fixture: ComponentFixture<CheckFirebaseQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckFirebaseQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckFirebaseQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
