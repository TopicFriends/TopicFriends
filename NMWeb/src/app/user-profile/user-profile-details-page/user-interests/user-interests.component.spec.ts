import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInterestsComponent } from './user-interests.component';

describe('UserInterestsComponent', () => {
  let component: UserInterestsComponent;
  let fixture: ComponentFixture<UserInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
