import {Component, Input, OnInit} from '@angular/core';
import {GeoLocation, UserDataCombined} from '../../../user-profile/user-profile.service'
import {DbListReadOnly} from '../../../db.service'
import {UserMatched} from '../../../user-matcher.service'
import {GeoLocationService} from '../../../shared/geo-location.service'
import {TopicsDetailsService} from '../../topics-details.service'
import {TOPIC_ID_PARAM} from '../../topics.module'
import {ActivatedRoute} from '@angular/router'
import {TagEntry} from '../../../user-profile/tag-entry'

@Component({
  selector: 'app-topic-details-map',
  templateUrl: './topic-details-map.component.html',
  styleUrls: ['./topic-details-map.component.scss']
})
export class TopicDetailsMapComponent implements OnInit {
  @Input() tagEntry: TagEntry;

  icon;
  topicId: string = this.route.snapshot.params[TOPIC_ID_PARAM];
  coordinates: GeoLocation = {latitude: 36.726, longitude: -4.476} /* mock default value for faster testing */;
  allUsersGeoLocations: GeoLocation[]
  constructor(
    private route: ActivatedRoute,
    private geoLocationService: GeoLocationService,
    private topicDetailsService: TopicsDetailsService
  ) { }

  ngOnInit() {
    this.icon = {
      url: this.tagEntry.logo,
      scaledSize: {
        //Hardcoded for Angular ratio
        width: 37.64,
        height: 40
      }
    }

    this.geoLocationService.getPosition().subscribe(
      (pos: Position) => {
        // this.coordinates = {
        //   latitude:  +(pos.coords.latitude.toFixed(5)),
        //   longitude: +(pos.coords.longitude.toFixed(5))
        // };
      }
    );

    let usersWithTopic: DbListReadOnly<UserDataCombined> = this.topicDetailsService.getUsersWithTopic(this.topicId)
    usersWithTopic.subscribe(userList => {

    })

    let matchedUsersWithTopic: DbListReadOnly<UserMatched> = this.topicDetailsService.getMatchedUsersWithTopic(this.topicId)
    matchedUsersWithTopic.subscribe(userMatchedList => {
      console.log(userMatchedList)
    })

    let matchedUsersWithTopicGeoLocations = this.topicDetailsService.getAllGeoLocationsOfUsersWithTopic(this.topicId);
    matchedUsersWithTopicGeoLocations.subscribe((geoLocations: GeoLocation[]) => {
      this.allUsersGeoLocations = geoLocations;
    })
  }



}
