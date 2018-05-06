import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavorsComponent } from './user-favors.component';

describe('UserFavorsComponent', () => {
  let component: UserFavorsComponent;
  let fixture: ComponentFixture<UserFavorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFavorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
