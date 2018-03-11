import {Component, Input, OnInit} from '@angular/core';
import {GeoLocation} from '../user-profile/user-profile.service'
import {TopicsDetailsService} from '../topic-details/topics-details.service'
import {ActivatedRoute, Router} from '@angular/router'
import {TagEntry} from '../topics/tag-entry'
import {logosSizeRatio} from '../../assets/logos-size-ratio'
import {DbListReadOnly} from '../db.service'
import { USER_ROUTE_WITH_TRAILING_SLASH } from '../user-profile-details/user-profile-details.module'

@Component({
  selector: 'app-topics-map',
  templateUrl: './topics-map.component.html',
  styleUrls: ['./topics-map.component.scss']
})
export class TopicsMapComponent implements OnInit {
  @Input() topics: TagEntry[];
  icon;
  iconBaseSize = 25;
  usersGeoLocations = {};
  topicsIcon = [];
  coordinates: GeoLocation = {latitude: 36.726, longitude: -4.476} /* mock default value for faster testing */;
  constructor(
    private topicDetailsService: TopicsDetailsService,
    private router: Router
  ) { }

  ngOnInit() {
    for(let topic of this.topics) {
      this.topicsIcon[topic.id] = this.getMapTopicIcon(topic);
      this.getUsersWithTopicGeoLocations(topic.id).subscribe((geoLocations) => {
          this.usersGeoLocations[topic.id] = geoLocations
      })
    }
  }

  getUsersWithTopicGeoLocations(topicId: string) {
    return this.topicDetailsService.getAllGeoLocationsOfUsersWithTopic(topicId);
  }

  getMapTopicIcon(topic: TagEntry) {
    //May be extracted in a service
    let icon;
    if(topic.logo) {
      let logoFileName = topic.logo.replace(/^.*[\\\/]/, '');
      let logoSizeRatio = logosSizeRatio[logoFileName];
      let scaleFactor = this.iconBaseSize / (logoSizeRatio.width * logoSizeRatio.height);
      if(logoSizeRatio) {
        icon = {
          url: topic.logo,
          scaledSize: {
            width: scaleFactor * logoSizeRatio.width,
            height: scaleFactor * logoSizeRatio.height
          }
        }
      }
    }
    return icon;
  }

  onMarkerClick(marker: GeoLocation) {
    this.router.navigate(['/' + USER_ROUTE_WITH_TRAILING_SLASH + marker.userId])
  }

  onIconBaseSizeChange() {
    for(let topic of this.topics) {
      this.topicsIcon[topic.id] = this.getMapTopicIcon(topic);
    }
  }
}
