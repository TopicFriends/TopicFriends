import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileBasicInfoComponent } from './user-profile-basic-info.component';

describe('UserProfileBasicInfoComponent', () => {
  let component: UserProfileBasicInfoComponent;
  let fixture: ComponentFixture<UserProfileBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
