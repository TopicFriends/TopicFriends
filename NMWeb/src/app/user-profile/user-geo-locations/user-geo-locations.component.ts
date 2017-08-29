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

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userProfileService: UserProfileService,
  ) {
    this.formGroup = this.formBuilder.group({
      whereILive: '',
      whereIWork: '',
      whereIStudy: '',
    })
  }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      console.log('UserGeoLocationsComponent: authService.user.subscribe user', user);
      this.userProfileService.getUserGeoLocations().subscribe((geoLocations) => {
        if ( geoLocations ) {
          // this.formGroup.setValue(geoLocations)
          this.formGroup.patchValue(geoLocations)
        }
      })
    })
  }

  public getValue() {
    return this.formGroup.value
  }

}
