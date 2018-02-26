import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTemplateComponent } from './user-template.component';

describe('UserTemplateComponent', () => {
  let component: UserTemplateComponent;
  let fixture: ComponentFixture<UserTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
