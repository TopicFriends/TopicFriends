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
      new Poi('BeWorking', new GeoLocation(36.6964859,-4.4443957)),
      new Poi('Coworking ElCentro', new GeoLocation(36.7149315,-4.425144)),
      new Poi('Bunker CoWorking', new GeoLocation(36.7172594,-4.429016)),
      new Poi('La Workería', new GeoLocation(36.7168117,-4.4237665)),
      new Poi('Malaca XXI Coworking', new GeoLocation(36.7168117,-4.4237665)),
      new Poi('Centro de Recursos Participativos', new GeoLocation(36.7133099,-4.4514274)),
    ])
  }

}
