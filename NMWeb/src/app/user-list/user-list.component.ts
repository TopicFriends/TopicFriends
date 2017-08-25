import { Component, OnInit } from '@angular/core';
import {UserDataFetched, UserDataWithDetails, UserProfile} from 'app/user-profile/user-profile.service';
import { UserListService } from "app/user-list/user-list.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList; // = [];// = this.userListService.getUserList();
  userListSaved: UserDataWithDetails[];

  constructor(
    private userListService: UserListService
  ) {

  }

  ngOnInit() {
    this.userList = this.userListService.listUserDataWithDetails();
    this.userList.subscribe(list => {
      this.userListSaved = list;
    })
  }

  trackByKey(idx, val) {
    return val.$key
  }

  public potentialConnectionsCount() {
    let n = this.userListSaved && this.userListSaved.length
    // window.alert('count'+ count)
    return  n * n / 2 - n / 2
  }

}
