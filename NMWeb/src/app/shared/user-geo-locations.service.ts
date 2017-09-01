import { Injectable } from '@angular/core';
import {DomainDbService} from '../domain-db.service'
import {DbListReadOnly, DbService} from '../db.service'
import {UserGeoLocations} from '../user-profile/user-profile.service'
import { } from 'googlemaps';

@Injectable()
export class UserGeoLocationsService {

  constructor(
    private domainDbService: DomainDbService,
    private dbService: DbService,
  ) {

  }

  getAllUserGeoLocations(): DbListReadOnly<UserGeoLocations> {
    return this.dbService.list(this.domainDbService.PATHS.GEO_LOCATIONS)
  }

  calculateDistance(coordinatesA, coordinatesB) {
    console.log(google.maps.geometry.spherical.computeDistanceBetween(coordinatesA, coordinatesB));
    return google.maps.geometry.spherical.computeDistanceBetween(coordinatesA, coordinatesB);
  }

}
