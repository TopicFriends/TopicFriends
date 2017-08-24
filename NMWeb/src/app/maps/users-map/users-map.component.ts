import { Component, OnInit } from '@angular/core';
import {GeolocationService} from '../geolocation.service'


export class GeoCoords {
  latitude: number
  longitude: number
}

@Component({
  selector: 'app-users-map',
  templateUrl: './users-map.component.html',
  styleUrls: ['./users-map.component.scss']
})
export class UsersMapComponent implements OnInit {

  coordinates: GeoCoords = {latitude: 36.726, longitude: -4.476} /* mock default value for faster testing */;

  constructor(
    private geolocationService: GeolocationService
  ) {}
  ngOnInit() {
    this.geolocationService.getPosition().subscribe(
      (pos: Position) => {
        this.coordinates = {
          latitude:  +(pos.coords.latitude.toFixed(3)),
          longitude: +(pos.coords.longitude.toFixed(3))
        };
      }
    );
  }

}
