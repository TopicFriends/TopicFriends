import { Component, OnInit } from '@angular/core';
import {UserGroup, UserGroupService} from '../shared/user-group.service'

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss']
})
export class UserGroupsComponent implements OnInit {

  list: Array<UserGroup>

  constructor(
    public userGroupService: UserGroupService,
  ) {
    this.userGroupService.observeUserGroupList().subscribe(list => {
      this.list = list
    })
  }

  ngOnInit() {
  }

}
