import {Component, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {GeolocationService} from '../../../shared/geolocation.service'
import {UserPickLocationComponent} from '../../../maps/user-pick-location/user-pick-location.component'
import {MdDialog} from '@angular/material'
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'

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

  propagateChange = (_: any) => {};


  @ViewChild('latitudeLongitude') latitudeLongitudeControl

  constructor(
    public geoLocationService: GeolocationService,
    public dialog: MdDialog
  ) { }

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
    let dialogRef = this.dialog.open(UserPickLocationComponent, {
      height: '400px',
      width: '600px',
      data: {
        locationName: this.locationName
      }
    }).afterClosed().subscribe(returnVal => {
      if ( returnVal ) {
        this.setInputText(returnVal.lat.toFixed(4) + ', ' + returnVal.lng.toFixed(4))
      }
    })
  }

  private setInputText(s: string) {
    this.latitudeLongitudeControl.nativeElement.value = s
    this.propagateChange(s);
  }

  clear() {
    this.setInputText('')
  }

  writeValue(value: any) {
    this.setInputText(value)
  }

  registerOnTouched() {}

}
