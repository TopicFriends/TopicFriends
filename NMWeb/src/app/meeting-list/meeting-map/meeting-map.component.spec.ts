import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingMapComponent } from './meeting-map.component';

describe('MeetingMapComponent', () => {
  let component: MeetingMapComponent;
  let fixture: ComponentFixture<MeetingMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
