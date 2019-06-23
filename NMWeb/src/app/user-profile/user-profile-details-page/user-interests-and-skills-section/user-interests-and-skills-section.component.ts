import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {TopicsService} from '../../../topics/topics-core/topics.service'
import {TagInclusions} from '../../../topics/topics-core/TagInclusions'
import {UserSkillLevelsPerUser, UserSkillsService} from '../../user-profile-core/user-skills.service'
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms'
import {UserProfileInputs} from '../UserProfileInputs'
import { TagEntry } from '../../../topics/topics-shared/tag-entry'
import {
  createTopicsDictionary,
  UserProfileService,
} from '../../user-profile-core/user-profile.service'
import { TopicInterest } from '../../user-profile-core/user-interests'

@Component({
  selector: 'app-user-interests-and-skills-section',
  templateUrl: './user-interests-and-skills-section.component.html',
  styleUrls: ['./user-interests-and-skills-section.component.scss'],
})
export class UserInterestsAndSkillsSectionComponent implements OnInit {

  allTopicsArray: TagEntry[]
  allTopics: TagInclusions

  @Input() public parentFormGroup: FormGroup
  @Input() public userProfileInputs: UserProfileInputs
  @Input() thisFormGroup: FormGroup

  constructor(
    public topicsService: TopicsService,
    public userSkillsService: UserSkillsService,
    public userProfileService: UserProfileService,
  ) {
    this.allTopicsArray = topicsService.topics
    this.allTopics = createTopicsDictionary(this.allTopicsArray.map(tagEntry => {
      return new TopicInterest(tagEntry);
    }))
  }

  ngOnInit() {
    console.log('UserSkillsListComponent ngOnInit thisFormGroup', this.thisFormGroup)

    // this.userSkillsService.saveExampleData() // FIXME

    this.userProfileService.userSkillLevelsByUserId(this.userProfileInputs.userId)
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
