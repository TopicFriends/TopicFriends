import {Component, Input, OnInit} from '@angular/core';
import {GeoLocation} from '../user-profile/user-profile.service'
import {GeoLocationService} from '../shared/geo-location.service'
import {TopicsDetailsService} from '../topic-details/topics-details.service'
import {TOPIC_ID_PARAM} from '../topic-details/topic-details.module'
import {ActivatedRoute, Router} from '@angular/router'
import {TagEntry} from '../user-profile/tag-entry'
import {USER_ROUTE_WITH_TRAILING_SLASH} from '../user-profile/user-profile.module'

@Component({
  selector: 'app-topics-map',
  templateUrl: './topics-map.component.html',
  styleUrls: ['./topics-map.component.scss']
})
export class TopicsMapComponent implements OnInit {
  @Input() tagEntry: TagEntry;

  icon;
  topicId: string;
  coordinates: GeoLocation = {latitude: 36.726, longitude: -4.476} /* mock default value for faster testing */;
  allUsersGeoLocations: GeoLocation[]
  constructor(
    private route: ActivatedRoute,
    private geoLocationService: GeoLocationService,
    private topicDetailsService: TopicsDetailsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.topicId = this.tagEntry.id;
    let icon_url = this.tagEntry.logo;
    let showLogo = true;
    console.log(icon_url);
    if(icon_url) {
      let width, height;
      //Hardcoded values
      switch(this.topicId) {
        case 'Angular':
          width = 37.64
          height = 40
          break;

        case 'NodeJS':
          width = 48.91
          height = 30
          break;


        case 'HTML5':
          width = 30
          height = 42.3
          break;

        case 'JavaScript':
          width = 35
          height = 35
          break;

        case 'ECMAScript':
          width = 35
          height = 35
          break;


        case 'Firebase':
          width = 29.17
          height = 40
          break;

        case 'TypeScript':
          width = 35
          height = 35
          break;

        default:
          showLogo = false;
          width = height = 40;
          break;
      }

      if(showLogo) {
        this.icon = {
          url: icon_url,
          scaledSize: {
            width: width,
            height: height
          }
        }
      }
    }

    /*this.geoLocationService.getPosition().subscribe(
      (pos: Position) => {
         this.coordinates = {
           latitude:  +(pos.coords.latitude.toFixed(5)),
           longitude: +(pos.coords.longitude.toFixed(5))
         };
      }
    );*/

    let matchedUsersWithTopicGeoLocations = this.topicDetailsService.getAllGeoLocationsOfUsersWithTopic(this.topicId);
    matchedUsersWithTopicGeoLocations.subscribe((geoLocations: GeoLocation[]) => {
      this.allUsersGeoLocations = geoLocations;
    })
  }

  onMarkerClick(marker: GeoLocation) {
    this.router.navigate(['/' + USER_ROUTE_WITH_TRAILING_SLASH + marker.userId])
  }
}
