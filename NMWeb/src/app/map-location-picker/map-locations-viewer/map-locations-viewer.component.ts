import {
  Component, EventEmitter, Input, OnInit, Output
} from '@angular/core';
import {GeoLocation} from '../../user-profile-shared/user-geo-locations.types'
import {ScrollingService} from '../../shared/scrolling.service'
import {UserPickLocationDialogParams} from '../user-pick-location-dialog-params'
@Component({
  selector: 'app-map-locations-viewer',
  templateUrl: './map-locations-viewer.component.html',
  styleUrls: ['./map-locations-viewer.component.scss']
})
export class MapLocationsViewerComponent implements OnInit {

  // //Two-way databinding
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


  coordinates: GeoLocation
  public locationName: string

  constructor(
    private scrollingService: ScrollingService
  ) {
    console.log("0")
  }

  ngOnInit() {
    console.log("1")
    this.locationName = this.data.locationName
    console.log("2")
    this.coordinates = GeoLocation.parseGeoString(this.data.geoLocationString);
    console.log("3")
  }

  onShowDialog() {
    window.dispatchEvent(new Event('resize'));
    //Prevent scrolling
    this.scrollingService.disableScrolling();
  }

  onHideDialog() {
    this.display = false;
    //Enable scrolling
    this.scrollingService.enableScrolling();
  }

}
