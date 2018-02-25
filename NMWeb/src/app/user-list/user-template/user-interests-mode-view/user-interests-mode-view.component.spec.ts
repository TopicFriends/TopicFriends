import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInterestsModeViewComponent } from './user-interests-mode-view.component';

describe('UserInterestsModeViewComponent', () => {
  let component: UserInterestsModeViewComponent;
  let fixture: ComponentFixture<UserInterestsModeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInterestsModeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInterestsModeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
