import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyDemandButtonGroupComponent } from './supply-demand-button-group.component';

describe('SupplyDemandButtonGroupComponent', () => {
  let component: SupplyDemandButtonGroupComponent;
  let fixture: ComponentFixture<SupplyDemandButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyDemandButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyDemandButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
