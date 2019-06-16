import {TopicInterest, WantedTopics} from '../user-profile-shared/user-interests'
import {TagEntry} from '../topics/topics-shared/tag-entry'
import {EventEmitter} from '@angular/core'
import {getDictionaryValuesAsArray} from './utils'
/**
 * Created by kd on 2017-08-02.
 */

export class TagListModelEvent {
  tagList: TopicInterest[]
}

export class TagListModel {

  public valueWasSet = false

  constructor(
    public tags: TopicInterest[]
  ) {
    if ( tags instanceof Array ) {
      this.valueWasSet = true
    }
  }

  public outputTagList = new EventEmitter<TagListModelEvent>();

  addTag(tagEntry: TagEntry) {
    // const tagEntry = this.inputTagList.find(el => el.name === tag)
    if(tagEntry) {
      if (this.tagExists(tagEntry)) {
        return;
      }
      const topicInterest = new TopicInterest(tagEntry);
      this.tags.push(topicInterest);
      this.emitTags();
    }
  }

  deleteTag(tag: TopicInterest) {
    this.tags = this.tags.filter(t => t.tagEntry.name !== tag.tagEntry.name);
    this.emitTags();
  }


  tagExists(option: TagEntry) {
    return this.tags.some((tag) => {
      return (
        tag.tagEntry.name.toLowerCase() === option.name.toLowerCase()
        ||
        tag.tagEntry.id === option.id
      )
    });
  }

  /**
   * Send the tags entered by the user to the parent (user-profile component)
   */
  emitTags() {
    this.outputTagList.emit({tagList: this.tags});
  }

  setChosenTags(chosenTags: TopicInterest[]) {
    this.tags = chosenTags
    this.valueWasSet = true

  }

  static from(x: WantedTopics) {
    return new TagListModel(WantedTopics.extractTags(x))
  }
}
