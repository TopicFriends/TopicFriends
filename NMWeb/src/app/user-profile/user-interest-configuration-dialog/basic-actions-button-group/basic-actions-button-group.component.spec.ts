import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicActionsButtonGroupComponent } from './basic-actions-button-group.component';
import {MatButtonToggleModule} from '@angular/material'
import {CapitalizeFirstPipe} from '../../../shared/pipes/capitalize-first.pipe'

describe('BasicActionsButtonGroupComponent', () => {
  let component: BasicActionsButtonGroupComponent;
  let fixture: ComponentFixture<BasicActionsButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatButtonToggleModule,
      ],
      declarations: [
        BasicActionsButtonGroupComponent,
        CapitalizeFirstPipe,
      ]
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
