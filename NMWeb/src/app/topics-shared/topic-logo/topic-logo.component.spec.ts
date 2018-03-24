import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicLogoComponent } from './topic-logo.component';

describe('TopicLogoComponent', () => {
  let component: TopicLogoComponent;
  let fixture: ComponentFixture<TopicLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
