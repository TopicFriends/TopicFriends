import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTemplateFastComponent } from './user-template-fast.component';

describe('UserTemplateFastComponent', () => {
  let component: UserTemplateFastComponent;
  let fixture: ComponentFixture<UserTemplateFastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTemplateFastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTemplateFastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
