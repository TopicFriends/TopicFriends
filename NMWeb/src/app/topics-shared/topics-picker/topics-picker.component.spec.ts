import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsPickerComponent } from './topics-picker.component';

describe('TopicsPickerComponent', () => {
  let component: TopicsPickerComponent;
  let fixture: ComponentFixture<TopicsPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
