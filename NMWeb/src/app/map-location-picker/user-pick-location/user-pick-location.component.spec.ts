import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPickLocationComponent } from './user-pick-location.component';

describe('UserPickLocationComponent', () => {
  let component: UserPickLocationComponent;
  let fixture: ComponentFixture<UserPickLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPickLocationComponent ]
    })
    .compileComponents();
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPickLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
