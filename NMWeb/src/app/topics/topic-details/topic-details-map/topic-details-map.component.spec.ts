import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicDetailsMapComponent } from './topic-details-map.component';

describe('TopicDetailsMapComponent', () => {
  let component: TopicDetailsMapComponent;
  let fixture: ComponentFixture<TopicDetailsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicDetailsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicDetailsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
