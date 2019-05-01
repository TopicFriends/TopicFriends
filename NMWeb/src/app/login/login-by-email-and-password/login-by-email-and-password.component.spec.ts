import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginByEmailAndPasswordComponent } from './login-by-email-and-password.component';

describe('LoginByEmailAndPasswordComponent', () => {
  let component: LoginByEmailAndPasswordComponent;
  let fixture: ComponentFixture<LoginByEmailAndPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginByEmailAndPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginByEmailAndPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
