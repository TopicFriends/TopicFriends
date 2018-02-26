import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGeoLocationsComponent } from './user-geo-locations.component';

describe('UserGeoLocationsComponent', () => {
  let component: UserGeoLocationsComponent;
  let fixture: ComponentFixture<UserGeoLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGeoLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGeoLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should be created', () => {
    expect(component).toBeTruthy();
  });
});
