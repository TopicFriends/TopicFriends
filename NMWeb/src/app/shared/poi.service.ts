import { Injectable } from '@angular/core';
import { GeoLocation } from '../user-profile-shared/user-geo-locations.types'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import { pois } from './poi.data'

export class Poi {
  constructor(
    public title: string,
    public geoLocation: GeoLocation,
    public url?: string,
    public icon?: string,
  ) {}
}


@Injectable()
export class PoiService {

  constructor() { }

  observePois() {
    return Observable.of(pois)
  }

}
