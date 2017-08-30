import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicDetailsComponent } from './topic-details.component';

describe('TopicDetailsComponent', () => {
  let component: TopicDetailsComponent;
  let fixture: ComponentFixture<TopicDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
