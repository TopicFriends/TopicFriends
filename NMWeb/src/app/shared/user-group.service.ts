import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable'

export class UserGroup {
  constructor(
    public name: string
  ) {}
}

@Injectable()
export class UserGroupService {

  constructor() {

  }

  observeUserGroupList() {
    return Observable.of([
      {
        name: 'Málaga Angular Developers'
      },
      {
        name: 'Málaga Angular Entrepreneurs'
      },
    ])
  }

}
