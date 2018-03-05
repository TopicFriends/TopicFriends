import { Component, OnInit } from '@angular/core';
import {GeoLocationService} from '../shared/geo-location.service'
import {GeoLocation} from '../user-profile/user-profile.service'
import {TOPIC_ID_PARAM} from '../topic-details/topic-details.module'
import {ActivatedRoute} from '@angular/router'
import {TagEntry} from '../user-profile/tag-entry'
import {TopicsService} from '../shared/topics.service'

@Component({
  selector: 'app-topics-map-page',
  templateUrl: './topics-map-page.component.html',
  styleUrls: ['./topics-map-page.component.scss']
})
export class TopicsMapPageComponent implements OnInit {

  //topicIds: string[] = this.route.snapshot.params[TOPIC_ID_PARAM].split(',');
  topicTag: TagEntry = this.topicsService.getTopicById('Angular');

  constructor(
    private geoLocationService: GeoLocationService,
    private route: ActivatedRoute,
    private topicsService: TopicsService
  ) { }

  ngOnInit() {
    //console.log(this.topicIds);
    /*this.geoLocationService.getPosition().subscribe(
   (pos: Position) => {
      this.coordinates = {
        latitude:  +(pos.coords.latitude.toFixed(5)),
        longitude: +(pos.coords.longitude.toFixed(5))
      };
   }
 );*/
  }
}
