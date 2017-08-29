import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material'
import {GeoLocation} from '../../user-profile/user-profile.service'

export class UserPickLocationDialogParams {
  locationName: string
  geoLocationString: string
}

@Component({
  selector: 'app-user-pick-location',
  templateUrl: './user-pick-location.component.html',
  styleUrls: ['./user-pick-location.component.scss']
})
export class UserPickLocationComponent implements OnInit {

  coordinates: GeoLocation
  private coords

  public locationName: string


  constructor(
    public dialogRef: MdDialogRef<UserPickLocationComponent>,
    @Inject(MD_DIALOG_DATA) public data: UserPickLocationDialogParams
  ) {
    this.locationName = data.locationName
    this.coordinates = GeoLocation.parseGeoString(data.geoLocationString) || new GeoLocation(36.726, -4.476)
  }

  ngOnInit() {
  }

  markerDragEnd(event) {
    this.coords = event.coords
    // window.alert('markerDragEnd ' + JSON.stringify(event))
  }

  acceptAndClose() {
    this.dialogRef.close(this.coords);
  }

}
