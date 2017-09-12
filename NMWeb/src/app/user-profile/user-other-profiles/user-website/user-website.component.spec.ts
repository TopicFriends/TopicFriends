import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWebsiteComponent } from './user-website.component';

describe('UserWebsiteComponent', () => {
  let component: UserWebsiteComponent;
  let fixture: ComponentFixture<UserWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
