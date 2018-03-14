import { Injectable } from '@angular/core';
import {TagEntry} from '../topics-shared/tag-entry'
import {DbObject, DbService} from '../shared/db.service'


export type UserSkillLevelEnum = undefined | 'none' | 'beginner' | 'intermediate' | 'advanced' | 'expert' // guru|coreContributor|Author


export type UserSkillLevelPerHaveWantCurrentHack = UserSkillLevelEnum

// TODO: new
export class UserSkillLevelPerHaveWant {
  level: number

}

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
  have?: UserSkillLevel // FIXME: type should be `UserSkillLevel | UserSkillLevelEnum` (short-circuitable)
  want?: UserSkillLevel // FIXME: type should be `UserSkillLevel | UserSkillLevelEnum` (short-circuitable)
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

const exampleData2: any = {
  UserSkillLevels: {
    "someUserID" : {
      /* byTopic: for consistency with perInteractionMode */
      byTopic: {
        Angular: {
          whenStartedUsing: '2018-02-26',
          whenLastUsed: '2018-02-26',
          durationUsed: '2 years',
          comments: "Learned during studies. Using in dayjob.",
          have: {
            level: 3,
            //maxLevel: // that level existing code, which uses `level` will not break down
          },
          want: {
            level: 4,
            comments: "Would like to get advanced to use it in my startup."
            // Future: could be wanted hourly rate
          }
        }
      }
    }
  }
}

@Injectable()
export class UserSkillsService {

  constructor(
    private db: DbService,
  ) { }

  saveExampleData() {
    // this.userSkillLevelsByUserId('ExampleUser').set(exampleData)
  }
}
