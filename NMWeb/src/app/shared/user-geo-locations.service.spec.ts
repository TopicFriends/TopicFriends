import { TestBed, inject } from '@angular/core/testing';

import { UserGeoLocationsService } from './user-geo-locations.service';

describe('UserGeoLocationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserGeoLocationsService]
    });
  });

  it('should be created', inject([UserGeoLocationsService], (service: UserGeoLocationsService) => {
    expect(service).toBeTruthy();
  }));
});
