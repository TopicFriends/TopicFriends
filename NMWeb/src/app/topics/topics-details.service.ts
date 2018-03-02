import {Injectable} from '@angular/core';
import {UserListService} from '../user-list/user-list.service'
import {TagInclusions} from '../shared/TagInclusions'
import {UserDataCombined} from '../user-profile/user-profile.service'
import {DbList} from '../db.service'
import {UserInterests} from '../user-profile/user-interests'

@Injectable()
export class TopicsDetailsService {

  constructor(private userListService: UserListService) {
  }

  getUsersWithTopic(topicId: string): DbList<UserDataCombined> {
    return this.userListService.listUserDataCombined().map((users: Array<UserDataCombined>) => {
      return users.filter((user: UserDataCombined) => {
        let interests = user.interests;
        return UserInterests.hasTopicId(interests, topicId);
      });
    });
  }
}
