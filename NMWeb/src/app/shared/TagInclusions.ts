import {TopicInterest} from '../user-profile/user-interests'

export interface TagInclusions  {
  [/** Note: this is NOT the id of the topic itself */ topicInclusionId: string]: TopicInterest
}
