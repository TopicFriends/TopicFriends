import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicGroupSupplyDemandCardComponent } from './topic-group-supply-demand-card.component';

describe('TopicGroupSupplyDemandCardComponent', () => {
  let component: TopicGroupSupplyDemandCardComponent;
  let fixture: ComponentFixture<TopicGroupSupplyDemandCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicGroupSupplyDemandCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicGroupSupplyDemandCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
