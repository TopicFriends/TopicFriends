import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {SupplyDemandButtonGroupComponent} from './supply-demand-button-group.component';
import {MatButtonToggleModule} from '@angular/material'
import {CapitalizeFirstPipe} from '../../../shared/pipes/capitalize-first.pipe'

describe('SupplyDemandButtonGroupComponent', () => {
  let component: SupplyDemandButtonGroupComponent;
  let fixture: ComponentFixture<SupplyDemandButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatButtonToggleModule
      ],
      declarations: [
        SupplyDemandButtonGroupComponent,
        CapitalizeFirstPipe,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyDemandButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
