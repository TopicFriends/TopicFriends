import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {TopicsService} from '../../../shared/topics.service'
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'
import {TopicGroupCardComponent} from '../../user-interests/topic-group-card/topic-group-card.component'
import {UserInterests, WantedTopics} from '../../user-interests'
import {SkillLevelsPerTopic, UserSkillLevelsHaveWant} from '../../../shared/user-skills.service'
import {TagEntry} from '../../tag-entry'
import {UserProfileInputs} from '../../user-profile.component'

@Component({
  selector: 'app-user-skills-list',
  templateUrl: './user-skills-list.component.html',
  styleUrls: ['./user-skills-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserSkillsListComponent),
      multi: true,
    }
  ],
})
export class UserSkillsListComponent implements OnInit, ControlValueAccessor {

  skillLevelsPerTopic: SkillLevelsPerTopic = { }

  @Input() userProfileInputs: UserProfileInputs

  topics: TagEntry[]

  constructor(
    public topicsService: TopicsService,
  ) {
    this.topics = topicsService.topics.concat() // clone
    this.topics.sort((topic1: TagEntry, topic2: TagEntry) => {
      return topic1.name.localeCompare(topic2.name)
    })
  }

  propagateChange = (_: SkillLevelsPerTopic) => { }

  ngOnInit() {
  }

  /* override */ registerOnChange(fn) {
    this.propagateChange = fn
  }

  /* override */ writeValue(value: SkillLevelsPerTopic) {
    console.log('UserSkillsListComponent writeValue', value)
    this.skillLevelsPerTopic = value

    this.topics.sort((topic1: TagEntry, topic2: TagEntry) => {
      const topic1Level = this.getHaveOrWantLevelNumber(topic1.id)
      if ( topic1Level ) {
        // console.log('topic1Level', topic1Level)
      }
      const topic2Level = this.getHaveOrWantLevelNumber(topic2.id)
      // const retComparison = ((topic1Level || 'none') as string)
      //   .localeCompare((topic2Level) as string)
      // // console.log('retComparison', retComparison)
      const retComparison = topic2Level - topic1Level
      return retComparison
    })
  }

  /* override */ registerOnTouched(fn: any) {
    // no-op
  }

  onLevelsChanged(userSkillLevels: UserSkillLevelsHaveWant, tag: TagEntry) {
    if ( ! userSkillLevels ) {
      return;
    }
    this.skillLevelsPerTopic[tag.id] = {
      skillTopic: tag,
      skillLevels: userSkillLevels,
    }
    console.log('onLevelsChanged propagateChange', this.skillLevelsPerTopic)
    this.propagateChange(this.skillLevelsPerTopic)
  }

  getSkillLevelsForTopicId(id: string) {
    const skillLevelsPerTopic2 = this.skillLevelsPerTopic[id]
    const ret = skillLevelsPerTopic2 && skillLevelsPerTopic2.skillLevels
    if (ret) {
      // console.log('getSkillLevelsForTopicId ret', ret)
    }
    return ret
  }

  private getHaveOrWantLevel(topicId: string): string {
    const topicLevels = this.skillLevelsPerTopic[topicId]
    const retLevel = topicLevels && (
      ( topicLevels.skillLevels && topicLevels.skillLevels.have )
      ||
      ( topicLevels.skillLevels && topicLevels.skillLevels.want )
    )
    return retLevel as any
  }

  private getHaveOrWantLevelNumber(topicId: string): number {
    const levelString = this.getHaveOrWantLevel(topicId)

    const mapLevelStringToNumber = {
      '?' : -1,
      'none' : 0,
      'beginner' : 1,
      'intermediate': 2,
      'advanced' : 3,
      'expert' : 4,
    }

    let retLevel = mapLevelStringToNumber[levelString]

    if ( retLevel == null ) {
      return -1
    }
    return retLevel
  }
}
