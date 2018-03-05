import {Component, Input, OnInit} from '@angular/core';
import {UserOtherProfileDescriptor} from '../user-other-profiles.component'

@Component({
  selector: 'app-user-other-profile-icon',
  templateUrl: './user-other-profile-icon.component.html',
  styleUrls: ['./user-other-profile-icon.component.scss']
})
export class UserOtherProfileIconComponent implements OnInit {


  @Input() descriptor: UserOtherProfileDescriptor

  constructor() { }

  ngOnInit() {
  }

}
