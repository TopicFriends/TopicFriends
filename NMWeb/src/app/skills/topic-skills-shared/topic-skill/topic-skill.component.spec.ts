import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicSkillComponent } from './topic-skill.component';

xdescribe('TopicTag2Component', () => {
  let component: TopicSkillComponent;
  let fixture: ComponentFixture<TopicSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
