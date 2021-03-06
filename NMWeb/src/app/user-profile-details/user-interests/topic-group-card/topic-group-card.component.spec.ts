import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicGroupCardComponent } from './topic-group-card.component';

describe('TopicGroupCardComponent', () => {
  let component: TopicGroupCardComponent;
  let fixture: ComponentFixture<TopicGroupCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicGroupCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicGroupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
