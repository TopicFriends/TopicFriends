import { Injectable } from '@angular/core';
import {DbList, DbService} from './db.service'
import {TagEntry} from '../topics/topics-shared/tag-entry'

export const TOPICS_PATH = 'Topics'
export const TOPICS_TOPIC_PATH = TOPICS_PATH + '/UserTopic'

/**
 * Move to topics-shared-services module
 * FIXME: rename to CustomTopicsService (because User* prefix is misleading, suggesting part of user's profile.
 * Or the reverse: only have TopicsService and move built-in topics data into separate file (e.g. topics.data.ts) or service (BuiltInTopicsService) */
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
    let newTopic = new TagEntry(name, null) // TODO: escape
    // Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"
    // AND /
    // Though " (double quote) works
    // idea: escape . as ,
    // idea:
    this.userTopics.update(newTopic.id, newTopic)
  }

}
