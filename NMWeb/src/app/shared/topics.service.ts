import { Injectable } from '@angular/core';
import { TagEntry } from '../topics/topics-shared/tag-entry'
import {
  tag,
  topics,
} from '../topics/topics-core/topics.data'


@Injectable()
export class TopicsService {

  constructor() { }

  public topics: TagEntry[] = this.transformTags(topics);


  private transformTags(inputList: (TagEntry|string)[]): TagEntry[] {
    let retTopicsArray = []
    for ( let elTopic of inputList ) {
      this.addTopic(elTopic, retTopicsArray)
    }
    return retTopicsArray
  }

  getTopicById(topicIdOrName: string, topicsArray?: TagEntry[]): TagEntry {
    topicsArray = topicsArray || this.topics
    let retVal = topicsArray.find((it: TagEntry) => it.id === topicIdOrName)
    if ( ! retVal ) {
      retVal = topicsArray.find((it: TagEntry) => it.name === topicIdOrName)
    }
    if ( ! retVal ) {
      // console.error('getTopicById failed for topicIdOrName', topicIdOrName)
      // console.log(topicsArray)
    }
    // console.log('getTopicById', topicId, retVal)
    return retVal
  }

  /* TODO: move the logic */
  addTopic(topic: TagEntry|string, topicsArray?: TagEntry[]) {
    topicsArray = topicsArray || this.topics


    let newTopic: TagEntry

    if (topic instanceof TagEntry) {
      newTopic = topic
    } else {
      newTopic = tag(topic)
    }

    if ( newTopic.id.match(/\.|#|\$|\[|\]|\//) ) {
      const message = 'Topic id contains illegal char: '
      console.error(message, newTopic)
      window.alert(message + newTopic.id)
      return null
    }

    if ( this.topicExistsById(newTopic.id, topicsArray) ) {
      const message2 = 'Duplicate topic: '
      console.error('Duplicate topic: ', newTopic)
      window.alert('Duplicate topic: ' + newTopic.id)
      return null
    }

    topicsArray.push(newTopic)
    if ( newTopic.related ) {
      for ( let relatedTopic of newTopic.related ) {
        this.addTopic(relatedTopic, topicsArray)
      }
      // topicsArray.splice(topicsArray.length, 0, ...newTopic.related)
    }

    return newTopic
  }

  topicExistsById(topicId: string, topicsArray?) {
    return !! this.getTopicById(topicId, topicsArray)
  }

}
