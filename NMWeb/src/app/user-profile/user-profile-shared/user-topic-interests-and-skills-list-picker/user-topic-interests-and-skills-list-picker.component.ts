import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UserProfileInputs } from '../../user-profile-details-page/UserProfileInputs'

@Component({
  selector: 'app-user-topic-interests-and-skills-list-picker',
  templateUrl: './user-topic-interests-and-skills-list-picker.component.html',
  styleUrls: ['./topic-interests-and-skills-list-picker.component.sass']
})
export class UserTopicInterestsAndSkillsListPickerComponent implements OnInit {

  @Input() public userProfileInputs: UserProfileInputs

  constructor() { }

  ngOnInit() {
  }

}
