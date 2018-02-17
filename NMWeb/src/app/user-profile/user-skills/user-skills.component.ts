import {Component, Input, OnInit} from '@angular/core';
import {TopicsService} from '../../shared/topics.service'
import {TagEntry} from '../tag-entry'
import {TagInclusions} from '../../shared/TagInclusions'
import {createTopicsDictionary} from '../user-profile.service'
import {TopicInterest} from '../user-interests'
import {UserSkillLevelsPerUser, UserSkillsService} from '../../shared/user-skills.service'
import {FormGroup} from '@angular/forms'
import {UserProfileInputs} from '../user-profile.component'

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.scss']
})
export class UserSkillsComponent implements OnInit {

  allTopicsArray: TagEntry[]
  allTopics: TagInclusions

  @Input() public parentFormGroup: FormGroup
  @Input() public userProfileInputs: UserProfileInputs
  public formGroup: FormGroup


  public otherProfiles: UserSkillLevelsPerUser


  constructor(
    public topicsService: TopicsService,
    public userSkillsService: UserSkillsService,
  ) {
    this.allTopicsArray = topicsService.topics
    this.allTopics = createTopicsDictionary(this.allTopicsArray.map(tagEntry => {
      return new TopicInterest(tagEntry);
    }))
  }

  ngOnInit() {
    this.userSkillsService.saveExampleData() // FIXME
  }

}
