import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserListService } from 'app/user-list/user-list.service';
import { UserProfile } from 'app/user-profile/user-profile.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [
    trigger('filterState', [
      state('1', style({
        transform: 'translateY(0%)'
      })),
      state('0',   style({
        transform: 'translateY(100%)'
      })),
      transition('0 => 1', animate('200ms ease-in')),
      transition('1 => 0', animate('200ms ease-out'))
    ]),
    trigger('filterStateFab', [
      state('1', style({
        bottom: '250px',
        display: 'none'
      })),
      state('0',   style({
        bottom: '64px',
        right: '16px'
      })),
      transition('0 => 1', animate('200ms ease-in')),
      transition('1 => 0', animate('200ms ease-out'))
    ]),
    trigger('filterStateFabClose', [
      state('1', style({
        bottom: '210px',
        right: '8px'
      })),
      state('0',   style({
        bottom: '64px',
        right: '16px',
        display: 'none'
      })),
      transition('0 => 1', animate('200ms ease-in')),
      transition('1 => 0', animate('200ms ease-out'))
    ])
  ]
})
export class UserListComponent implements OnInit {

  userList: any[] = [];// = this.userListService.getUserList();
  isExpanded: boolean = false;

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

  expandFilter(){
    console.log("Updating")
    this.isExpanded = !this.isExpanded;
  }
}
