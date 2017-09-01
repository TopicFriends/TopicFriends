import {Component, ElementRef, Inject, NgZone, OnInit, ViewChild} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material'
import {GeoLocation} from '../../user-profile/user-profile.service'
import {FormControl} from '@angular/forms';
import {MapsAPILoader} from '@agm/core';
import { } from 'googlemaps';


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
  private coords: any;

  public locationName: string
  public searchControl: FormControl;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    public dialogRef: MdDialogRef<UserPickLocationComponent>,
    @Inject(MD_DIALOG_DATA) public data: UserPickLocationDialogParams,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
    this.locationName = data.locationName
    this.coordinates = GeoLocation.parseGeoString(data.geoLocationString) || new GeoLocation(36.726, -4.476)
  }

  ngOnInit() {

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          //Update markers and coords
          this.coordinates.longitude = place.geometry.location.lng();
          this.coordinates.latitude = place.geometry.location.lat();
          this.coords = {lat: this.coordinates.longitude, lng: this.coordinates.latitude};
        });
      });
    });
  }

  markerDragEnd(event) {
    this.coords = event.coords;

    // window.alert('markerDragEnd ' + JSON.stringify(event))
  }

  acceptAndClose() {
    this.dialogRef.close(this.coords);
  }

}
