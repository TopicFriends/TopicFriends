import { Injectable } from '@angular/core';


/* Note currently name collision with UserTopicsService. Look at the comment in it, regarding renames.
*
* This will be a combined service, which will be able to fetch/query data from both user skills and user interests.
* This is related to the thinking of whether to merge skills and interests in db and "rotate 90deg", making topics the root.
* Having this service is like a placeholder/wrapper (perhaps only partial, but still) around that decision.
*
* Example function here:
*
* public findUsersWithTopic(topicId: string)
* -- query will be faster than .filter on lists when we get more users (note for the future for David)
*
* */
@Injectable()
export class UserTopicsService {

  constructor() { }

}
