import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillLevelsLabelComponent } from './skill-levels-label.component';

describe('SkillLevelLabelComponent', () => {
  let component: SkillLevelsLabelComponent;
  let fixture: ComponentFixture<SkillLevelsLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillLevelsLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillLevelsLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
