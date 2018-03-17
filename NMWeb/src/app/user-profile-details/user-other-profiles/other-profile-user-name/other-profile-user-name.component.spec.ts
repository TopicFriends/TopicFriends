import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherProfileUserNameComponent } from './other-profile-user-name.component';

describe('OtherProfileUserNameComponent', () => {
  let component: OtherProfileUserNameComponent;
  let fixture: ComponentFixture<OtherProfileUserNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherProfileUserNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherProfileUserNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
