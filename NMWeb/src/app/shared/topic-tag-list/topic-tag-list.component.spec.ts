import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicTagListComponent } from './topic-tag-list.component';

describe('TopicTagListComponent', () => {
  let component: TopicTagListComponent;
  let fixture: ComponentFixture<TopicTagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicTagListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
