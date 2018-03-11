import {Component, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {GeoLocationService} from '../../../shared/geo-location.service'
import {UserPickLocationDialogParams, UserPickLocationComponent} from '../../../map-location-picker/user-pick-location/user-pick-location.component'
import {MatDialog} from '@angular/material'
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'
import {geoLocationToString} from '../user-geo-locations.component'
import {UserProfileInputs} from '../../UserProfileInputs'
import {GeoLocation} from '../../../user-profile/user-profile.service'

@Component({
  selector: 'app-user-geo-location',
  templateUrl: './user-geo-location.component.html',
  styleUrls: ['./user-geo-location.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserGeoLocationComponent),
      multi: true,
    }
  ],
})
export class UserGeoLocationComponent implements OnInit, ControlValueAccessor {

  position: Position
  @Input() locationName: string
  @Input() public userProfileInputs: UserProfileInputs

  propagateChange = (_: any) => {};


  @ViewChild('latitudeLongitude') latitudeLongitudeControl
  value: GeoLocation

  constructor(
    public geoLocationService: GeoLocationService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.geoLocationService.getPosition().subscribe((position: Position) => {
      // window.alert('got coords ' + position)
      this.position = position
    })
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  useCurrentLocation() {
    window.alert('test')
    window.alert(`pos: ${this.position.coords.latitude}, ${this.position.coords.longitude}`)
  }

  openLocationPicker() {
    const dialogParams: UserPickLocationDialogParams = {
      userProfileInputs: this.userProfileInputs,
      locationName: this.locationName,
      geoLocationString: this.latitudeLongitudeControl.nativeElement.value
    }
    let dialogRef = this.dialog.open(UserPickLocationComponent, {
      height: '620px',
      width: '90%',
      data: dialogParams
    }).afterClosed().subscribe(returnVal => {
      if ( returnVal ) {
        const fractionDigits = 4
        this.setInputText(returnVal.lat.toFixed(fractionDigits) + ', ' + returnVal.lng.toFixed(fractionDigits))
      }
    })
  }

  private setInputText(s: string) {
    this.latitudeLongitudeControl.nativeElement.value = s
    this.doPropagateChange(s)
  }

  private doPropagateChange(s: string) {
    this.propagateChange(GeoLocation.parseGeoString(s))
    // console.log('doPropagateChange', s)
  }

  clear() {
    this.setInputText('')
  }

  writeValue(value: GeoLocation) {
    this.value = value
    this.setInputText(geoLocationToString(value))
  }

  registerOnTouched() {}

}
