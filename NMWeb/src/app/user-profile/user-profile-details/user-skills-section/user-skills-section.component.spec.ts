import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSkillsSectionComponent } from './user-skills-section.component';

describe('UserSkillsComponent', () => {
  let component: UserSkillsSectionComponent;
  let fixture: ComponentFixture<UserSkillsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSkillsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSkillsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
