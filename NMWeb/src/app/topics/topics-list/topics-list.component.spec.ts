import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsListComponent } from './topics-list.component';

describe('TopicsAllComponent', () => {
  let component: TopicsListComponent;
  let fixture: ComponentFixture<TopicsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
