import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicTagComponent } from './topic-tag.component';

describe('TopicTagComponent', () => {
  let component: TopicTagComponent;
  let fixture: ComponentFixture<TopicTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
