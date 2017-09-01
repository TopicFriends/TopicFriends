import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GeoLocation, GeoLocationsDictionary, UserGeoLocations, UserProfile} from '../../user-profile/user-profile.service'
import {GeoLocationService} from '../../shared/geo-location.service'
import {UserGeoLocationsService} from '../../shared/user-geo-locations.service'

import { } from 'googlemaps';

export class UserCoords {
  user?: UserProfile
  geoCoords: GeoLocation
}

@Component({
  selector: 'app-users-map',
  templateUrl: './users-map.component.html',
  styleUrls: ['./users-map.component.scss']
})
export class UsersMapComponent implements OnInit {

  @ViewChild('slider') slider: ElementRef;

  allUsersGeoLocationsFlattened: GeoLocation[]
  radiusSearch = 300;
  coordinates: GeoLocation = {latitude: 36.726, longitude: -4.476} /* mock default value for faster testing */;
  numberOfNearUsers = 0;


  usersCoords: UserCoords[] = [
    {
      user: {
        displayName: 'David'
      },
      geoCoords: {latitude: 36.544, longitude: -4.65},
    },
    {
      user: {
        displayName: 'Rubén'
      },
      geoCoords: {latitude: 36.546, longitude:  -4.65015}
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
    private geoLocationService: GeoLocationService,
    private userGeoLocationsService: UserGeoLocationsService,
  ) {}
  ngOnInit() {
    this.geoLocationService.getPosition().subscribe(
      (pos: Position) => {
        this.coordinates = {
          latitude:  +(pos.coords.latitude.toFixed(5)),
          longitude: +(pos.coords.longitude.toFixed(5))
        };
        if(this.allUsersGeoLocationsFlattened) {
          this.updateNearUsers(this.coordinates);
        }
      }
    );

    this.userGeoLocationsService.getAllUserGeoLocations().subscribe(geos => {
      let allUsersGeoLocationsFlattened = []
      if ( geos ) {
        for ( let userLocation of geos ) {
          if ( userLocation && userLocation.geoLocations) {
            for ( let subLocationKey of Object.keys(userLocation.geoLocations) ) {
              const subLocation: GeoLocationsDictionary = userLocation.geoLocations[subLocationKey]
              console.log('getAllUserGeoLocations: subLocation', subLocation)
              for ( let subLocationMultiKey of Object.keys(subLocation) ) {
                const subLocationMulti: GeoLocation = subLocation[subLocationMultiKey]
                console.log('getAllUserGeoLocations: subLocationMulti', subLocationMulti)
                if ( subLocationMulti ) {
                  allUsersGeoLocationsFlattened.push(subLocationMulti)
                }
              }
            }
          }

        }
      }
      // console.log('allUsersGeoLocationsFlattened', allUsersGeoLocationsFlattened)
      // allUsersGeoLocationsFlattened.push(
      //   {latitude: 36.727, longitude: -4.473},
      //   {latitude: 36.721, longitude: -4.479},
      // )
      this.allUsersGeoLocationsFlattened = allUsersGeoLocationsFlattened
      if(this.allUsersGeoLocationsFlattened) {
        this.updateNearUsers(this.coordinates);
      }
    })
  }

  markerDragEnd(event) {
    window.alert('markerDragEnd ' + JSON.stringify(event))
  }

  onRadiusSearchChange() {
    if(this.allUsersGeoLocationsFlattened) {
      this.updateNearUsers(this.coordinates);
    }
  }

  updateNearUsers(position: GeoLocation) {
    const nearUsers:any[] = [];
    let coords = this.createLatLng(position.latitude, position.longitude);
    for (const user of this.allUsersGeoLocationsFlattened) {
      let userCoords = this.createLatLng(user.latitude, user.longitude);
      if (this.userGeoLocationsService.calculateDistance(coords, userCoords) <= this.radiusSearch) {
        nearUsers.push(user);
      }
    }
    this.numberOfNearUsers = nearUsers.length;
  }

  createLatLng(latitude, longitude) {
    return new google.maps.LatLng(latitude, longitude);
  }

}
