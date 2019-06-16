import {Component, OnDestroy, OnInit} from '@angular/core';
import {GeoLocationService} from '../../shared/geo-location.service'
import {GeoLocation} from '../../user-profile-shared/user-geo-locations.types'
import {TOPIC_ID_PARAM} from '../../shared/routes'
import {ActivatedRoute} from '@angular/router'
import {TagEntry} from '../topics-shared/tag-entry'
import {TopicsService} from '../../shared/topics.service'
import {Title} from '@angular/platform-browser'
import {ScrollingService} from '../../shared/scrolling.service'

@Component({
  selector: 'app-topics-map-page',
  templateUrl: './topics-map-page.component.html',
  styleUrls: ['./topics-map-page.component.scss']
})
export class TopicsMapPageComponent implements OnInit, OnDestroy {

  topicIds: string[];
  topics: TagEntry[] = [];

  constructor(
    private geoLocationService: GeoLocationService,
    private route: ActivatedRoute,
    private topicsService: TopicsService,
    private titleService: Title,
    private scrollingService: ScrollingService
  ) { }

  ngOnDestroy() {
    this.scrollingService.enableScrolling();
  }

  ngOnInit() {
    this.topicIds = this.route.snapshot.params[TOPIC_ID_PARAM].split(/[;,]/);
    this.scrollingService.disableScrolling();
    for(let topicId of this.topicIds) {
      this.topics.push(this.topicsService.getTopicById(topicId));
    }

    this.buildPageTitle();

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

  buildPageTitle() {
    let title = this.topicIds[0];
    for(let i = 1; i < this.topicIds.length; i++) {
      title += ', ' + this.topicIds[i];
    }
    title = title + ' - Topics Map'
    this.titleService.setTitle(title);
  }
}
