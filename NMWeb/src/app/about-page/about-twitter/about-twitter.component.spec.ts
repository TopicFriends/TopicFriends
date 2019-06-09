import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTwitterComponent } from './about-twitter.component';

describe('AboutTwitterComponent', () => {
  let component: AboutTwitterComponent;
  let fixture: ComponentFixture<AboutTwitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTwitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTwitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
