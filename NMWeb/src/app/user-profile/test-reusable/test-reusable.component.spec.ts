import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReusableComponent } from './test-reusable.component';

describe('TestReusableComponent', () => {
  let component: TestReusableComponent;
  let fixture: ComponentFixture<TestReusableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestReusableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
