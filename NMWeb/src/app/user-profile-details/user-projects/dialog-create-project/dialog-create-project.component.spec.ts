import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateProjectComponent } from './dialog-create-project.component';

describe('DialogCreateProjectComponent', () => {
  let component: DialogCreateProjectComponent;
  let fixture: ComponentFixture<DialogCreateProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCreateProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
