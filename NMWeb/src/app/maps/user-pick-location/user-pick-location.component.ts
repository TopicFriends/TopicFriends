import {Component, Inject, OnInit} from '@angular/core';
import {GeoCoords} from '../users-map/users-map.component'
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material'

@Component({
  selector: 'app-user-pick-location',
  templateUrl: './user-pick-location.component.html',
  styleUrls: ['./user-pick-location.component.scss']
})
export class UserPickLocationComponent implements OnInit {

  coordinates: GeoCoords = {latitude: 36.726, longitude: -4.476} /* mock default value for faster testing */;
  private coords

  public locationName: string


  constructor(
    public dialogRef: MdDialogRef<UserPickLocationComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) {
    this.locationName = data.locationName
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
