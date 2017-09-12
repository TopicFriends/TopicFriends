import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPickLocationModalComponent } from './user-pick-location-modal.component';

describe('UserPickLocationModalComponent', () => {
  let component: UserPickLocationModalComponent;
  let fixture: ComponentFixture<UserPickLocationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPickLocationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPickLocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
