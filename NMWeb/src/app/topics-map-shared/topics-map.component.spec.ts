import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsMapComponent } from './topics-map.component';

describe('TopicDetailsMapComponent', () => {
  let component: TopicsMapComponent;
  let fixture: ComponentFixture<TopicsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
