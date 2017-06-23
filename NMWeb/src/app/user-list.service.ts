import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class UserListService {

  userList;

  constructor(
    private db: AngularFireDatabase,
  ) {
    this.userList = db.list('UserProfile');
  }

  public getUserList() {
    return this.userList;
  }

}
