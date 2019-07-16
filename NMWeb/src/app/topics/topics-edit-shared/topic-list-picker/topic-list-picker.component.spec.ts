import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicListPickerComponent } from './topic-list-picker.component';

describe('ItemListInputComponent', () => {
  let component: TopicListPickerComponent;
  let fixture: ComponentFixture<TopicListPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicListPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicListPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
