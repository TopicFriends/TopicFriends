import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {TOPIC_ID_PARAM} from '../topics.module'
import {TagEntry} from '../../user-profile/tag-entry'
import {TopicsService} from '../../shared/topics.service'
import {TopicInterest} from '../../user-profile/user-interests'
import {GitHubService} from '../../shared/git-hub.service'
import {Title} from "@angular/platform-browser";
import { GeoLocationService } from '../../shared/geo-location.service';
import { GeoLocation, GeoLocationsDictionary } from '../../user-profile/user-profile.service';
import { UserMatcherService } from '../../user-matcher.service';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.scss']
})
export class TopicDetailsComponent implements OnInit {

  topicId: string = this.route.snapshot.params[TOPIC_ID_PARAM];
  coordinates: GeoLocation = {latitude: 36.726, longitude: -4.476} /* mock default value for faster testing */;
  topic: TagEntry
  topicInterest: TopicInterest
  userCoordinates: GeoLocationsDictionary[];
  constructor(
    private route: ActivatedRoute,
    private topicsService: TopicsService,
    private gitHubService: GitHubService,
    private titleService: Title,
    private geoLocationService: GeoLocationService, 
    private userMatcherService: UserMatcherService
  ) {
    this.topic = this.topicsService.getTopicById(this.topicId)
    this.topicInterest = this.createTopicInterest(this.topic);
  }

  ngOnInit() {
    this.titleService.setTitle( this.topic.name + ' - TopicFriends');
    this.geoLocationService.getPosition().subscribe(
      (pos: Position) => {
        // this.coordinates = {
        //   latitude:  +(pos.coords.latitude.toFixed(5)),
        //   longitude: +(pos.coords.longitude.toFixed(5))
        // };
      }
    );

    this.userMatcherService.listUsersSortedByLastModified().subscribe(users => {
      users.map(user => {
        if(user.userDataCombined.interests.byInteractionMode) {
          let topics = user.userDataCombined.interests.byInteractionMode.symmetric.exchange.topics;
          // console.log(topics);
          if(topics) {
            let i = 0;
            while(topics[i]) {
              if(topics[i].tagEntry.id == this.topic.id){
                this.userCoordinates.push(user.userDataCombined.geoLocations.geoLocations.whereILive);
                console.log(topics[i]);
              }
              
              i++;
            }
          }          
        }
      });
    });
  }

  createTopicInterest(topic) {
    return new TopicInterest(topic)
  }

}
