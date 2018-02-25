import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDescriptionsComponent } from './user-descriptions.component';

describe('UserDescriptionComponent', () => {
  let component: UserDescriptionsComponent;
  let fixture: ComponentFixture<UserDescriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDescriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
