import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingListPageComponent } from './meeting-list-page.component';

describe('MeetingListComponent', () => {
  let component: MeetingListPageComponent;
  let fixture: ComponentFixture<MeetingListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
