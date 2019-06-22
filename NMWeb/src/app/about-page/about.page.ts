import { Component, OnInit } from '@angular/core';
import { TopicInterest } from '../user-profile/user-profile-core/user-interests'
import {
  angular,
  firebase,
  ionic,
} from '../topics/topics-core/topics.data'

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutPage implements OnInit {

  firebase = new TopicInterest(firebase)
  ionic = new TopicInterest(ionic)
  angular = new TopicInterest(angular)

  constructor() { }

  ngOnInit() {
  }

}
