import { Component, OnInit } from '@angular/core';
import {GeolocationService} from '../geolocation.service'
import {UserProfile} from '../../user-profile/user-profile.service'

export class UserCoords {
  user?: UserProfile
  geoCoords: GeoCoords
}

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

  usersCoords: UserCoords[] = [
    {
      user: {
        displayName: 'David'
      },
      geoCoords: {latitude: 36.723, longitude: -4.476},
    },
    {
      user: {
        displayName: 'Rubén'
      },
      geoCoords: {latitude: 36.726, longitude: -4.476}
    },
    {
      user: {
        displayName: 'Anna'
      },
      geoCoords: {latitude: 36.727, longitude: -4.475}
    },
    {
      user: {
        displayName: 'Pablo'
      },
      geoCoords: {latitude: 36.7275, longitude: -4.4755}
    },
    {
      user: {
        displayName: 'Karol XYZ',
      },
      geoCoords: {latitude: 36.7265, longitude: -4.4745}
    },
  ]

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
