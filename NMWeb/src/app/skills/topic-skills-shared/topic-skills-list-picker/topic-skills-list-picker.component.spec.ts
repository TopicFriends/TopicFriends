import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicInterestsAndSkillsListPickerComponent } from './topic-skills-list-picker.component';

describe('TopicSkillsListPickerComponent', () => {
  let component: TopicInterestsAndSkillsListPickerComponent;
  let fixture: ComponentFixture<TopicInterestsAndSkillsListPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicInterestsAndSkillsListPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicInterestsAndSkillsListPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
