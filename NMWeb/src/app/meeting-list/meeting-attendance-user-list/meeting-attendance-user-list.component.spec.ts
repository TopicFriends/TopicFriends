import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingAttendanceUserListComponent } from './meeting-attendance-user-list.component';

describe('MeetingAttendanceUserListComponent', () => {
  let component: MeetingAttendanceUserListComponent;
  let fixture: ComponentFixture<MeetingAttendanceUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingAttendanceUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingAttendanceUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
