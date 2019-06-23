import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOtherProfileIconComponent } from './user-other-profile-icon.component';

xdescribe('UserOtherProfileIconComponent', () => {
  let component: UserOtherProfileIconComponent;
  let fixture: ComponentFixture<UserOtherProfileIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOtherProfileIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOtherProfileIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
