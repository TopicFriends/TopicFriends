import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsAllComponent } from './topics-all.component';

describe('TopicsAllComponent', () => {
  let component: TopicsAllComponent;
  let fixture: ComponentFixture<TopicsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
