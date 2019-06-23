import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTopicInterestsAndSkillsListPickerComponent } from './user-topic-interests-and-skills-list-picker.component';

describe('TopicInterestsAndSkillsListPickerComponent', () => {
  let component: UserTopicInterestsAndSkillsListPickerComponent;
  let fixture: ComponentFixture<UserTopicInterestsAndSkillsListPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTopicInterestsAndSkillsListPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTopicInterestsAndSkillsListPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
