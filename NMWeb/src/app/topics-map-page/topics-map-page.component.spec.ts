import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsMapPageComponent } from './topics-map-page.component';

describe('TopicsMapComponent', () => {
  let component: TopicsMapPageComponent;
  let fixture: ComponentFixture<TopicsMapPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsMapPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsMapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
