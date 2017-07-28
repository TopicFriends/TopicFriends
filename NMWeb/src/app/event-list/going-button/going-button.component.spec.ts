import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoingButtonComponent } from './going-button.component';

describe('GoingButtonComponent', () => {
  let component: GoingButtonComponent;
  let fixture: ComponentFixture<GoingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
