import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {
  GeoLocation, GeoLocationsDictionary, UserGeoLocations, UserProfile,
  UserProfileService,
} from '../../user-profile/user-profile.service'
import {GeoLocationService} from '../../shared/geo-location.service'

// import { } from 'googlemaps';
import {Router} from '@angular/router'
import {MatCheckbox} from '@angular/material'
import {Poi, PoiService} from '../../shared/poi.service'
import {UserListService} from '../../user-list/user-list.service'
import {UserMatcherService} from '../../user-profile/user-matcher.service'
import {UserGeoLocationsService} from '../../user-profile/user-geo-locations.service'
import { USER_ROUTE_WITH_TRAILING_SLASH } from '../../user-profile-details/user-profile-details.module'

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
  radiusSearch = 3000;
  coordinates: GeoLocation = {latitude: 36.726, longitude: -4.476} /* mock default value for faster testing */;
  numberOfNearUsers = 0;
  showLabelsOverMarker = true;
  showPeople = true;

  pois: Array<Poi>

  constructor(
    private geoLocationService: GeoLocationService,
    private userGeoLocationsService: UserGeoLocationsService,
    private userProfileService: UserProfileService,
    private userMatcherService: UserMatcherService,
    private userListService: UserListService,
    private poiService: PoiService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.poiService.observePois().subscribe(pois => {
      this.pois = pois
    })
    this.geoLocationService.getPosition().subscribe(
      (pos: Position) => {
        // this.coordinates = {
        //   latitude:  +(pos.coords.latitude.toFixed(5)),
        //   longitude: +(pos.coords.longitude.toFixed(5))
        // };
        // if(this.allUsersGeoLocationsFlattened) {
        //   this.updateNearUsers(this.coordinates);
        // }
      }
    );

    this.userGeoLocationsService.getAllUserGeoLocations().subscribe((geos: UserGeoLocations[]) => {
      let allUsersGeoLocationsFlattened = []
      if ( geos ) {
        for ( let userLocation of geos ) {
          UserGeoLocations.appendAllGeoLocations(
            userLocation,
            allUsersGeoLocationsFlattened,
            this.userMatcherService,
            this.userProfileService
          )
        }
      }
      // console.log('allUsersGeoLocationsFlattened', allUsersGeoLocationsFlattened)
      // allUsersGeoLocationsFlattened.push(
      //   {latitude: 36.727, longitude: -4.473},
      //   {latitude: 36.721, longitude: -4.479},
      // )
      this.allUsersGeoLocationsFlattened = allUsersGeoLocationsFlattened
      if(this.allUsersGeoLocationsFlattened) {
        // this.updateNearUsers(this.coordinates);
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

  onMarkerClick(marker: GeoLocation) {
    // window.alert('Click ' + JSON.stringify(marker))
    console.log('click', marker)
    // window.alert('Click ' + marker)
    this.router.navigate(['/' + USER_ROUTE_WITH_TRAILING_SLASH + marker.userId])
  }

  changeShowLabelOverMark() {
    this.showLabelsOverMarker = !this.showLabelsOverMarker
  }

  changeShowPeople() {
    this.showPeople = !this.showPeople
  }

}
