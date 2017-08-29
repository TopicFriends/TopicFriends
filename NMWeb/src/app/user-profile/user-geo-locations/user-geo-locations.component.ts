import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
import {AuthService} from '../auth.service'
import {UserProfileService} from '../user-profile.service'

@Component({
  selector: 'app-user-geo-locations',
  templateUrl: './user-geo-locations.component.html',
  styleUrls: ['./user-geo-locations.component.scss']
})
export class UserGeoLocationsComponent implements OnInit {


  public formGroup: FormGroup;

  public geoLocationControlWhereILive = new FormControl()
  public geoLocationControlWhereIWork = new FormControl()
  public geoLocationControlWhereIStudy = new FormControl()

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userProfileService: UserProfileService,
  ) {
    this.formGroup = this.formBuilder.group({
      geoLocationControlWhereILive: this.geoLocationControlWhereILive,
      geoLocationControlWhereIWork: this.geoLocationControlWhereIWork,
      geoLocationControlWhereIStudy: this.geoLocationControlWhereIStudy,
    })
  }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      console.log('UserGeoLocationsComponent: authService.user.subscribe user', user);
      this.userProfileService.getUserGeoLocations().subscribe((geoLocations) => {
          this.formGroup.setValue({
            geoLocationControlWhereILive:
              (<any>geoLocations).geoLocationControlWhereILive,
            geoLocationControlWhereIWork:
              (<any>geoLocations).geoLocationControlWhereIWork,
            geoLocationControlWhereIStudy:
              (<any>geoLocations).geoLocationControlWhereIStudy,
          })
        })
      })
  }

  public getValue() {
    return this.formGroup.value
  }

}
