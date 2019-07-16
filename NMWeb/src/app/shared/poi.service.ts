import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of'
import { pois } from './poi.data'


@Injectable()
export class PoiService {

  constructor() { }

  observePois() {
    return Observable.of(pois)
  }

}
