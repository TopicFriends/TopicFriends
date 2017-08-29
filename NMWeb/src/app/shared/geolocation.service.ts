import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GeolocationService {

  coordinates: any;

  constructor() { }

  public getPosition(): Observable<Position> {
    return Observable.create(
      (observer) => {
      navigator.geolocation.watchPosition((pos: Position) => {
        observer.next(pos);
      }),
      () => {
          console.log('Position is not available');
      },
      {
        enableHighAccuracy: false
      };
    });
  }
}
