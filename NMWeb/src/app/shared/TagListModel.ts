import {TopicInterest} from '../user-profile/user-interests'
import {TagEntry} from '../user-profile/tag-entry'
import {EventEmitter} from '@angular/core'
/**
 * Created by kd on 2017-08-02.
 */

export class TagListModel {

  constructor(
    public tags: TopicInterest[]
  ) {}

  public outputTagList = new EventEmitter<{tagList: TopicInterest[]}>();

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
      return tag.tagEntry.name.toLowerCase() === option.name.toLowerCase()
    });
  }

  /**
   * Send the tags entered by the user to the parent (user-profile component)
   */
  emitTags() {
    this.outputTagList.emit({tagList: this.tags});
  }
}
