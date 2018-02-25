import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicActionsButtonGroupComponent } from './basic-actions-button-group.component';

describe('BasicActionsButtonGroupComponent', () => {
  let component: BasicActionsButtonGroupComponent;
  let fixture: ComponentFixture<BasicActionsButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicActionsButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicActionsButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
