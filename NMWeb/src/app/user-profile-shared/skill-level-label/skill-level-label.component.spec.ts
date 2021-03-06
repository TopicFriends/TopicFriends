import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillLevelLabelComponent } from './skill-level-label.component';

describe('SkillLevelLabelComponent', () => {
  let component: SkillLevelLabelComponent;
  let fixture: ComponentFixture<SkillLevelLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillLevelLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillLevelLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
