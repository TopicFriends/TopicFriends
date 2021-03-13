import {TopicInterest, WantedTopics} from '../../user-profile/user-profile-core/user-interests'
import {TagEntry} from '../topics-shared/tag-entry'
import {EventEmitter} from '@angular/core'
import {getDictionaryValuesAsArray} from '../../util/utils'
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
    try {
      return this.tags.some((tag) => {
        return (
          /* FIXME make work when tagEntry does not exist

          ERROR TypeError: Cannot read property 'name' of undefined
              at main.2245ca65df090fc28755.bundle.js:1
              at Array.some (<anonymous>)
              at t.tagExists (main.2245ca65df090fc28755.bundle.js:1)
              at t.currentUserHasInterest (main.2245ca65df090fc28755.bundle.js:1)
              at t.sortFuncTags (main.2245ca65df090fc28755.bundle.js:1)
              at Array.sort (<anonymous>)
              at t.set [as relatedTopicLists] (main.2245ca65df090fc28755.bundle.js:1)
              at Eo (main.2245ca65df090fc28755.bundle.js:1)
              at main.2245ca65df090fc28755.bundle.js:1
              at main.2245ca65df090fc28755.bundle.js:1
          St @ main.2245ca65df090fc28755.bundle.js:1

          *
          * */
          tag.tagEntry.name.toLowerCase() === option.name.toLowerCase()
          ||
          tag.tagEntry.id === option.id
        )
      });

    } catch (e) {
      console.error('FIXME tagExists - does not exist', option)
      return false
    }
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
