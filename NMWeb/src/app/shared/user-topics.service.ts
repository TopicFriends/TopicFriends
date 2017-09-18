import { Injectable } from '@angular/core';
import {DbList, DbService} from '../db.service'
import {TagEntry} from '../user-profile/tag-entry'

export const TOPICS_PATH = 'Topics'
export const TOPICS_TOPIC_PATH = TOPICS_PATH + '/UserTopic'

@Injectable()
export class UserTopicsService {

  userTopics: DbList<TagEntry> = this.dbService.list(TOPICS_TOPIC_PATH)

  constructor(
    private dbService: DbService
  ) {

  }

  observeUserTopics() {
    return this.userTopics
  }

  addTopic(name: string) {
    let newTopic = new TagEntry(name, null)
    this.userTopics.update(newTopic.id, newTopic)
  }

}
