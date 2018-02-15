import { Injectable } from '@angular/core';
import {TagEntry} from '../user-profile/tag-entry'

export class UserSkillLevel {
  minLevel: string
  maxLevel: string
}

export class UserSkillLevels {
  have: UserSkillLevel
  want: UserSkillLevel
}

export class UserSkill {
  skillTopic: TagEntry
  skillLevels: UserSkillLevels
}


@Injectable()
export class UserSkillsService {

  constructor() { }

}
