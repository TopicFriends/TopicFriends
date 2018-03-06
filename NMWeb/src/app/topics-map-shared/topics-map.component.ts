import {Component, Input, OnInit} from '@angular/core';
import {GeoLocation} from '../user-profile/user-profile.service'
import {GeoLocationService} from '../shared/geo-location.service'
import {TopicsDetailsService} from '../topic-details/topics-details.service'
import {TOPIC_ID_PARAM} from '../topic-details/topic-details.module'
import {ActivatedRoute, Router} from '@angular/router'
import {TagEntry} from '../user-profile/tag-entry'
import {USER_ROUTE_WITH_TRAILING_SLASH} from '../user-profile/user-profile.module'
import {logosScaleFactors} from '../../assets/logos-scale-factors'

@Component({
  selector: 'app-topics-map',
  templateUrl: './topics-map.component.html',
  styleUrls: ['./topics-map.component.scss']
})
export class TopicsMapComponent implements OnInit {
  @Input() topic: TagEntry;

  icon;
  coordinates: GeoLocation = {latitude: 36.726, longitude: -4.476} /* mock default value for faster testing */;
  allUsersGeoLocations: GeoLocation[]
  constructor(
    private route: ActivatedRoute,
    private geoLocationService: GeoLocationService,
    private topicDetailsService: TopicsDetailsService,
    private router: Router
  ) { }

  ngOnInit() {
    let icon_url = this.topic.logo;
    let logoScaleFactors = logosScaleFactors[this.topic.id];
    if(logoScaleFactors) {
      this.icon = {
        url: this.topic.logo,
        scaledSize: {
          width: logoScaleFactors.width,
          height: logoScaleFactors.height
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

    let matchedUsersWithTopicGeoLocations = this.topicDetailsService.getAllGeoLocationsOfUsersWithTopic(this.topic.id);
    matchedUsersWithTopicGeoLocations.subscribe((geoLocations: GeoLocation[]) => {
      this.allUsersGeoLocations = geoLocations;
    })
  }

  onMarkerClick(marker: GeoLocation) {
    this.router.navigate(['/' + USER_ROUTE_WITH_TRAILING_SLASH + marker.userId])
  }
}
