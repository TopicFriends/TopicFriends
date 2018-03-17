import {Component, Input, OnInit} from '@angular/core';
import {UserProfileService} from '../../user-profile-shared/user-profile.service'
import {MeetingAttendanceByUserWithUserData, MeetingAttendanceService} from '../meeting-attendance.service'
import {ActivatedRoute, Router} from '@angular/router'
import { USER_ROUTE_WITH_TRAILING_SLASH } from '../../shared/routes'
import {
  GeoLocation,
  UserGeoLocations,
} from '../../user-profile-shared/user-geo-locations.types'

@Component({
  selector: 'app-meeting-map',
  templateUrl: './meeting-map.component.html',
  styleUrls: ['./meeting-map.component.scss']
})
export class MeetingMapComponent implements OnInit {


  @Input() coordinates: GeoLocation = {latitude: 36.726, longitude: -4.476} /* mock default value for faster testing */;

  allUsersLocations: GeoLocation[] = [];

  meetingId;

  constructor(
    private meetingAttendanceService: MeetingAttendanceService,
    private userProfileService: UserProfileService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.meetingId = this.route.snapshot.params['meetingId'];
    this.meetingAttendanceService.fetchMeetingAttendanceByUserWithUserData(this.meetingId).subscribe(list => {
      for(let user of list) {
        this.allUsersLocations = [];
        this.addUserToUsersGeoLocations(user);
      }
    });
  }

  addUserToUsersGeoLocations(user: MeetingAttendanceByUserWithUserData) {
    this.userProfileService.userDataByIdCombined(user.userData.userId)
      .subscribe((userDataCombined) => {
        UserGeoLocations.appendUserGeoLocations(userDataCombined.geoLocations, this.allUsersLocations)
      })
  }

  onMarkerClick(marker: GeoLocation) {
    // window.alert('Click ' + JSON.stringify(marker))
    console.log('click', marker)
    // window.alert('Click ' + marker)
    this.router.navigate(['/' + USER_ROUTE_WITH_TRAILING_SLASH + marker.userId])
  }
}
