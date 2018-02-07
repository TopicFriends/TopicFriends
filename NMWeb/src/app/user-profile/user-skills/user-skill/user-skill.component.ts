import {Component, Input, OnInit} from '@angular/core';
import {TopicInterest} from 'app/user-profile/user-interests';
import {TagEntry} from '../../tag-entry'

@Component({
  selector: 'app-user-skill',
  templateUrl: './user-skill.component.html',
  styleUrls: ['./user-skill.component.scss'],
})
export class UserSkillComponent implements OnInit {

  @Input() tag: TagEntry
  tag2: TopicInterest

  constructor() { }

  ngOnInit() {
    this.tag2 = new TopicInterest(this.tag);
  }

  setValue() {

  }

}
