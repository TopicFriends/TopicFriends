import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSkillsListComponent } from './user-skills-list.component';

describe('UserSkillsListComponent', () => {
  let component: UserSkillsListComponent;
  let fixture: ComponentFixture<UserSkillsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSkillsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSkillsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
