import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingDetailsComponent } from './meeting-details.component';

describe('MeetingDetailsComponent', () => {
  let component: MeetingDetailsComponent;
  let fixture: ComponentFixture<MeetingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
