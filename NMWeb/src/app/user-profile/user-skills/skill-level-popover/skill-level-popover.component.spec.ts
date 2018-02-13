import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillLevelPopoverComponent } from './skill-level-popover.component';

describe('PopoverComponent', () => {
  let component: SkillLevelPopoverComponent;
  let fixture: ComponentFixture<SkillLevelPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillLevelPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillLevelPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
