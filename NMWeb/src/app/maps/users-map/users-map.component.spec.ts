import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMapComponent } from './users-map.component';

describe('UsersMapComponent', () => {
  let component: UsersMapComponent;
  let fixture: ComponentFixture<UsersMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
