import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UserOtherProfiles } from '../../../user-profile/user-profile-core/user-other-profiles.service'
import { UserOtherProfilesDescriptorsDefs } from '../../../user-profile-details/user-other-profiles/UserOtherProfilesDescriptors'

@Component({
  selector: 'app-user-other-profiles-badges',
  templateUrl: './user-other-profiles-badges.component.html',
  styleUrls: ['./user-other-profiles-badges.component.sass'],
})
export class UserOtherProfilesBadgesComponent implements OnInit {

  readonly descriptors = UserOtherProfilesDescriptorsDefs.array

  @Input() userOtherProfiles: UserOtherProfiles

  constructor() { }

  ngOnInit() {
  }

}
