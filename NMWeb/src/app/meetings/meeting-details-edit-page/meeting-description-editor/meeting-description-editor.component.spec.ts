import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingDescriptionEditorComponent } from './meeting-description-editor.component';

describe('MeetingDescriptionEditorComponent', () => {
  let component: MeetingDescriptionEditorComponent;
  let fixture: ComponentFixture<MeetingDescriptionEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingDescriptionEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingDescriptionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
