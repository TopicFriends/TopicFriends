import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforParentComponent } from './ngfor-parent.component';

describe('NgforParentComponent', () => {
  let component: NgforParentComponent;
  let fixture: ComponentFixture<NgforParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
