import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInterestConfigurationDialogComponent } from './user-interest-configuration-dialog.component';

describe('UserInterestConfigurationDialogComponent', () => {
  let component: UserInterestConfigurationDialogComponent;
  let fixture: ComponentFixture<UserInterestConfigurationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInterestConfigurationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInterestConfigurationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
