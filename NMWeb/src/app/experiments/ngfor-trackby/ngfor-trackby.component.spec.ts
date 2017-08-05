import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforTrackbyComponent } from './ngfor-trackby.component';

describe('NgforTrackbyComponent', () => {
  let component: NgforTrackbyComponent;
  let fixture: ComponentFixture<NgforTrackbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforTrackbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforTrackbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
