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
      new Poi('GrowWorking', new GeoLocation(36.704939, -4.441062)),
      new Poi('Karismatia', new GeoLocation(36.7212875,-4.492133)),
      new Poi('Green Ray', new GeoLocation(36.7185311,-4.4969805)),
      new Poi('La Térmica', new GeoLocation(36.689476, -4.445295)),
      new Poi('La Noria', new GeoLocation(36.7288361,-4.4312157)),
      new Poi('BeWorking', new GeoLocation(36.694098, -4.457228)),
      new Poi('Coworking ElCentro', new GeoLocation(36.7149315,-4.425144)),
      new Poi('Bunker CoWorking', new GeoLocation(36.712029, -4.435445)),
      new Poi('La Workería', new GeoLocation(36.7168117,-4.4237665)),
      new Poi('Malaca XXI Coworking', new GeoLocation(36.7138149,-4.4311112)),
      new Poi('Centro de Recursos Participativos', new GeoLocation(36.7133099,-4.4514274)),
      new Poi('The Living Room Coworking', new GeoLocation(36.715998,-4.424373)),
      new Poi('Copenhalaga Soho Co-working', new GeoLocation(36.7165408,-4.423438)),
    ])
  }

}
