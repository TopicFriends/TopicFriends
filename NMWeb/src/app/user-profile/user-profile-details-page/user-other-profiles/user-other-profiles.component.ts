import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms'
import { UserProfileInputs } from '../UserProfileInputs'
import { setFormControlEnabled } from '../../../util/utils'
import { UserProfileService } from '../../user-profile-core/user-profile.service'
import { UserOtherProfiles } from '../../user-profile-core/user-other-profiles.service'
import {
  getOtherProfileName,
  otherProfileUserName,
  UserOtherProfileDescriptor,
  UserOtherProfilesDescriptorsDefs,
  UserOtherProfilesDescriptorVals,
} from './UserOtherProfilesDescriptors'


@Component({
  selector: 'app-user-other-profiles',
  templateUrl: './user-other-profiles.component.html',
  styleUrls: ['./user-other-profiles.component.scss'],
})
export class UserOtherProfilesComponent implements OnInit {

  // descriptors: UserOtherProfilesDescriptors<UserOtherProfileDescriptor> = [
  descriptorsMap = new UserOtherProfilesDescriptorsDefs()

  formControls: UserOtherProfilesDescriptorVals<FormControl> = {} as any

  descriptorsList = UserOtherProfilesDescriptorsDefs.array

  @Input() public parentFormGroup: FormGroup;
  @Input() public userProfileInputs: UserProfileInputs
  public formGroup: FormGroup;

  public otherProfiles: UserOtherProfiles

  constructor(
    private formBuilder: FormBuilder,
    private userProfileService: UserProfileService,
  ) {
    for ( let key in this.descriptorsMap ) {
      if (this.descriptorsMap.hasOwnProperty(key)) {
        this.formControls[key] = new FormControl()
      }
    }

    this.formGroup = this.formBuilder.group(this.formControls)
  }

  ngOnInit() {
    this.parentFormGroup.addControl('UserOtherProfiles', this.formGroup)
    // new approach: adding to parent form group instead of constructing the whole form structure at once
    this.userProfileService.otherProfilesById(this.userProfileInputs.userId).subscribe((otherProfiles: UserOtherProfiles) => {
      this.applyFromDb(otherProfiles)
    });
    setFormControlEnabled(this.formGroup, this.userProfileInputs.isEditable)
  }

  /* TODO: extract to non-component */
  private applyFromDb(otherProfiles: UserOtherProfiles) {
    this.otherProfiles = otherProfiles;
    if (otherProfiles) {
      // FIXME: setValue instead of patchValue (because some might be undefined)
      // this.formGroup.setValue({
      const patch = {}
      for ( let key of Object.keys(otherProfiles) ) {
        patch[key] = getOtherProfileName(otherProfiles[key])
      }
      this.formGroup.patchValue(patch)
    }
    this.formGroup.markAsPristine()
  }

  /* TODO: extract to non-component */
  getOtherProfiles(): UserOtherProfiles {
    const formVal = {}
    for ( let key of Object.keys(this.formControls) ) {
      formVal[key] = {
        userName: otherProfileUserName(this.formControls[key])
      }
    }
    return formVal as UserOtherProfiles
  }
}
