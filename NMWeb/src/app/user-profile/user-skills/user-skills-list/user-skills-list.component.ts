import {Component, forwardRef, OnInit} from '@angular/core';
import {TopicsService} from '../../../shared/topics.service'
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'
import {TopicGroupCardComponent} from '../../user-interests/topic-group-card/topic-group-card.component'
import {UserInterests, WantedTopics} from '../../user-interests'
import {SkillLevelsPerTopic, UserSkillLevelsHaveWant} from '../../../shared/user-skills.service'
import {TagEntry} from '../../tag-entry'

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

  constructor(
    public topicsService: TopicsService,
  ) { }

  propagateChange = (_: SkillLevelsPerTopic) => { }

  ngOnInit() {
  }

  /* override */ registerOnChange(fn) {
    this.propagateChange = fn
  }

  /* override */ writeValue(value: SkillLevelsPerTopic) {
    console.log('UserSkillsListComponent writeValue', value)
    this.skillLevelsPerTopic = value
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
}
