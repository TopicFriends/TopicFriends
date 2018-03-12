import { Injectable } from '@angular/core';
import {DbListReadOnly, DbService} from '../db.service'
import {UserGeoLocations} from './user-profile.service'
import { } from 'googlemaps';
import { DomainDbService } from '../shared/domain-db.service'

@Injectable()
export class UserGeoLocationsService {


  constructor(
    private dbService: DbService,
    private domainDbService: DomainDbService,
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
