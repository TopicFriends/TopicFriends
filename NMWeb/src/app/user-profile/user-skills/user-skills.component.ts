import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {TopicsService} from '../../shared/topics.service'
import {TagEntry} from '../tag-entry'
import {TagInclusions} from '../../shared/TagInclusions'
import {createTopicsDictionary} from '../user-profile.service'
import {TopicInterest, UserInterests, WantedTopics} from '../user-interests'
import {UserSkillLevelsPerUser, UserSkillsService} from '../../shared/user-skills.service'
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms'
import {UserProfileInputs} from '../user-profile.component'
import {TopicGroupCardComponent} from '../user-interests/topic-group-card/topic-group-card.component'
import {TagListModelEvent} from '../../shared/TagListModel'
import {DomainDbService} from '../../domain-db.service'

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.scss'],
})
export class UserSkillsComponent implements OnInit {

  allTopicsArray: TagEntry[]
  allTopics: TagInclusions

  @Input() public parentFormGroup: FormGroup
  @Input() public userProfileInputs: UserProfileInputs
  @Input() thisFormGroup: FormGroup

  // public formGroup: FormGroup



  public otherProfiles: UserSkillLevelsPerUser


  constructor(
    public topicsService: TopicsService,
    public userSkillsService: UserSkillsService,
    public domainDbService: DomainDbService,
  ) {
    this.allTopicsArray = topicsService.topics
    this.allTopics = createTopicsDictionary(this.allTopicsArray.map(tagEntry => {
      return new TopicInterest(tagEntry);
    }))
  }

  ngOnInit() {
    console.log('UserSkillsListComponent ngOnInit thisFormGroup', this.thisFormGroup)

    // this.userSkillsService.saveExampleData() // FIXME

    this.domainDbService.userSkillLevelsByUserId(this.userProfileInputs.userId)
      .subscribe((userSkillLevelsPerUser: UserSkillLevelsPerUser) => {
      this.applyFromDb(userSkillLevelsPerUser)
    });
  }

  private applyFromDb(userSkillLevelsPerUser: UserSkillLevelsPerUser) {
    userSkillLevelsPerUser = userSkillLevelsPerUser || { skillLevelsPerTopic: {} }
    this.thisFormGroup.patchValue(userSkillLevelsPerUser) // hack: using patchValue instead of setValue to deal with missing formGroup

    // this.thisFormGroup.setValue(userSkillLevelsPerUser) // FIXME: use setValue with filled-in missing values
    this.thisFormGroup.markAsPristine()
  }


  static buildFormGroup(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      skillLevelsPerTopic: {}
    })
  }

  getValue() {
    return this.thisFormGroup.value
  }

}
