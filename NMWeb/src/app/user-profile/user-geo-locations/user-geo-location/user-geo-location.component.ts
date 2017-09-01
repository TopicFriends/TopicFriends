import {Component, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {GeoLocationService} from '../../../shared/geo-location.service'
import {UserPickLocationDialogParams, UserPickLocationComponent} from '../../../maps/user-pick-location/user-pick-location.component'
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
    public geoLocationService: GeoLocationService,
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
    const dialogParams: UserPickLocationDialogParams = {
      locationName: this.locationName,
      geoLocationString: this.latitudeLongitudeControl.nativeElement.value
    }
    let dialogRef = this.dialog.open(UserPickLocationComponent, {
      height: '470px',
      width: '600px',
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
