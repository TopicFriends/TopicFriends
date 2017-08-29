import { Injectable } from '@angular/core';
import {DomainDbService} from '../domain-db.service'
import {DbListReadOnly, DbService} from '../db.service'
import {UserGeoLocations} from '../user-profile/user-profile.service'

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

}
