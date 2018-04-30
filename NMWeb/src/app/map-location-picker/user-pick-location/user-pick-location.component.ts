import {
  Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {GeoLocation} from '../../user-profile-shared/user-geo-locations.types'
import { MapsAPILoader} from '@agm/core';
import {ScrollingService} from '../../shared/scrolling.service'
import {UserPickLocationDialogParams} from '../user-pick-location-dialog-params'



@Component({
  selector: 'app-user-pick-location',
  templateUrl: './user-pick-location.component.html',
  styleUrls: ['./user-pick-location.component.scss'],
  encapsulation: ViewEncapsulation.None /* to fix geo-location completion list */,
})
export class UserPickLocationComponent implements OnInit {

  //Two-way databinding
  disp = false;
  @Output() displayChange:  EventEmitter<boolean>;
  @Input()
  get display (){
    return this.disp;
  }
  set display(value) {
    this.disp = value;
    this.displayChange.emit(this.disp)
  }

  @Input() data: UserPickLocationDialogParams;
  @Output() onClose = new EventEmitter;


  coordinates: GeoLocation
  private coords: any;
  public locationName: string
  public isEditable: boolean

  static instance: UserPickLocationComponent

  @ViewChild("searchInputField")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private scrollingService: ScrollingService
    ) {
    this.displayChange = new EventEmitter();
  }

  ngOnInit() {
    this.isEditable = this.data.userProfileInputs.isEditable
    this.locationName = this.data.locationName
    this.coordinates = GeoLocation.parseGeoString(this.data.geoLocationString) || new GeoLocation(36.726, -4.476)
    console.log('UserPickLocationComponent ngOnInit')
    if ( this.isEditable ) {
      this.initSearchBar()
    }
  }

  private initSearchBar() {
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        // types: ["address"] // https://developers.google.com/places/web-service/autocomplete#place_types
      });
      // setTimeout(function() {
      // // failed attempt to fix the vertical position of the autocomplete list:
      //   google.maps.event.trigger(window, 'resize');
      //   console.log('setTimeout')
      // }, 2000);
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
          this.coords = {
            lat: this.coordinates.latitude,
            lng: this.coordinates.longitude
          };
        });
      });
    });
  }

  markerDragEnd(event) {
    this.coords = event.coords;

    // window.alert('markerDragEnd ' + JSON.stringify(event))
  }

  onShowDialog() {
    window.dispatchEvent(new Event('resize'));
    //Prevent scrolling
    this.scrollingService.disableScrolling();
  }

  onHideDialog() {
    this.disp = false;
    //Enable scrolling
    this.scrollingService.enableScrolling();
  }
  close() {
    let dialogResult = this.isEditable ? this.coords : undefined
    this.onClose.emit(dialogResult);
  }
}
