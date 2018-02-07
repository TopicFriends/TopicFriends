import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSkillComponent } from './user-skill.component';

describe('UserSkillComponent', () => {
  let component: UserSkillComponent;
  let fixture: ComponentFixture<UserSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
