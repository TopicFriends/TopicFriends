import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGeoLocationComponent } from './user-geo-location.component';

describe('UserGeoLocationComponent', () => {
  let component: UserGeoLocationComponent;
  let fixture: ComponentFixture<UserGeoLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGeoLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGeoLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
