import { Injectable } from '@angular/core';
import {GeoLocation} from '../user-profile/user-profile.service'
import {Observable} from 'rxjs/Observable'

export class Poi {
  constructor(
    public title: string,
    public geoLocation: GeoLocation,

  ) {}
}

@Injectable()
export class PoiService {

  constructor() { }

  observePois() {
    return Observable.of([
      new Poi('Polo Digital', new GeoLocation(36.6989071,-4.4391211)),
      new Poi('GrowWorking', new GeoLocation(36.7054342, -4.4411492)),
      new Poi('Karismatia', new GeoLocation(36.7212875,-4.492133)),
      new Poi('Green Ray', new GeoLocation(36.7185311,-4.4969805)),
      new Poi('La Térmica', new GeoLocation(36.6898667,-4.4452127)),
      new Poi('La Noria', new GeoLocation(36.7288361,-4.4312157)),
    ])
  }

}
