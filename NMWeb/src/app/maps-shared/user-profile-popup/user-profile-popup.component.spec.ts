import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilePopupComponent } from './user-profile-popup.component';

describe('UserProfilePopupComponent', () => {
  let component: UserProfilePopupComponent;
  let fixture: ComponentFixture<UserProfilePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfilePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
