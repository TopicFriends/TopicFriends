import { Injectable } from '@angular/core';
import {TagEntry} from '../user-profile/tag-entry'
import {DbObject, DbService} from '../db.service'
import {DomainDbService} from '../domain-db.service'


export type UserSkillLevelEnum = undefined | 'none' | 'beginner' | 'intermediate' | 'advanced' | 'expert' // guru|coreContributor|Author


/* Rename: UserSkillLevelPerTopic ? */
export class UserSkillLevel {
  minLevel: UserSkillLevelEnum
  maxLevel: UserSkillLevelEnum

  // or, a custom syntax, in a single field `level`, like:
  // 'beginner..intermediate'
  // or just 'advanced'


  // ==== Future:
  // field `comments`, e.g. "Worked on projects X Y Z since 2015 while winning Annual Angular Award :)"
  // this could augment/replace options like author/coreContributor

  // startYear
  // currentlyWorkingWith / whenLastWorkedWith

  // from Siemens screenshot: "Core Competency"
}

export class UserSkillLevelsHaveWant {
  have?: UserSkillLevel
  want?: UserSkillLevel
}

export class UserSkill {
  skillTopic: TagEntry // a bit of duplication, but maybe good for de-normalization/NoSQL
  skillLevels: UserSkillLevelsHaveWant
}

export interface SkillLevelsPerTopic {
  [topicId: string]: UserSkill
}

export class UserSkillLevelsPerUser {
  skillLevelsPerTopic: SkillLevelsPerTopic
}

const exampleData: UserSkillLevelsPerUser = {
  skillLevelsPerTopic: {
    Angular: {
      skillTopic: new TagEntry('Angular'),
      skillLevels: {
        have: {
          minLevel: 'intermediate',
          maxLevel: 'advanced',
        }, // want is optional
      }

    }
  }
}


@Injectable()
export class UserSkillsService {

  constructor(
    private db: DbService,
    private domainDb: DomainDbService,
  ) { }

  saveExampleData() {
    // this.userSkillLevelsByUserId('ExampleUser').set(exampleData)
  }
}
