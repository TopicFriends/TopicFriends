import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsVisualizerTestComponent } from './skills-visualizer-test.component';

describe('SkillsVisualizerTestComponent', () => {
  let component: SkillsVisualizerTestComponent;
  let fixture: ComponentFixture<SkillsVisualizerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsVisualizerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsVisualizerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
