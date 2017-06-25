import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserListService } from 'app/user-list/user-list.service';
import { UserProfile } from 'app/user-profile/user-profile.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: any[] = [];// = this.userListService.getUserList();

  constructor(
    private userListService: UserListService,
    private _router: Router
  ) {

  }

  ngOnInit() {
    this.userList = this.userListService.getDefaultUserList();
  }

  meetUser(user: UserProfile){
    this._router.navigate(['/people-list', user.name])
  }
}
