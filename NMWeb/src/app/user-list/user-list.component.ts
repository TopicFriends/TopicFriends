import { Component, OnInit } from '@angular/core';
import {UserData, UserDataCombined} from 'app/user-profile/user-profile.service';
import { UserListService } from "app/user-list/user-list.service";
import { DbListReadOnly } from '../db.service';
import {Observable} from 'rxjs/Observable'
import {UserMatched, UserMatcherService} from '../user-matcher.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: DbListReadOnly<UserData>; // = [];// = this.userListService.getUserList();
  userListCombinedSorted: Array<UserMatched> // = [];// = this.userListService.getUserList();
  userListCombinedSorted2: Array<UserMatched> // = [];// = this.userListService.getUserList();

  userListSaved;  //: UserDataWithDetails[];

  constructor(
    private userListService: UserListService,
    private userMatcherService: UserMatcherService,
  ) {

  }

  ngOnInit() {
    this.userList = this.userListService.listUserData();
    this.userList.subscribe(list => {
      this.userListSaved = list;
    })
    // this.userListService.listUserDataCombined().subscribe(list=> {
    //   this.userListCombinedSortedByName = list.sort((el1, el2) => {
    //     if ( ! el1.profile.displayName || ! el2.profile.displayName) {
    //       return 0
    //     }
    //     return el1.profile.displayName.localeCompare(
    //       el2.profile.displayName
    //     )
    //   })
    // })
    this.userMatcherService.listUsersSortedByLastModified().subscribe(l => {
      this.userListCombinedSorted2 = l
    })
    this.userMatcherService.listUsersSortedByMatchScoreAndFilteredByMaxDistance().subscribe(l => {
      this.userListCombinedSorted = l
    })
  }

  trackByKey(idx, val: UserData) {
    // console.log('trackByKey: ', val)
    return val.userId
  }

  public potentialConnectionsCount() {
    let n = this.userListSaved && this.userListSaved.length
    // window.alert('count'+ count)
    // return  n * n / 2 - n / 2
    return  n * n - n  // n^2 - n, because interactions can go in both directions
  }

}
