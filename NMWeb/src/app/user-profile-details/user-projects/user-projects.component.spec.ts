import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProjectsComponent } from './user-projects.component';

describe('UserProjectsComponent', () => {
  let component: UserProjectsComponent;
  let fixture: ComponentFixture<UserProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
