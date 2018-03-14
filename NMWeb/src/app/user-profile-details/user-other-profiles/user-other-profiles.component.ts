import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
import {UserProfileInputs} from '../UserProfileInputs'
import {setFormControlEnabled} from '../../shared/utils'
import {
  UserProfileService,
} from '../../user-profile-shared/user-profile.service'
import {
  OtherProfile,
  UserOtherProfiles,
} from '../../user-profile-shared/user-other-profiles.service'


function getOtherProfileName(otherProfile: OtherProfile) {
  return otherProfile && otherProfile.userName
}

function otherProfileUserName(formControl: FormControl) {
  // return formControl.value || "" // || "" to prevent firebase complaining about undefined
  return formControl.value || null // || "" to prevent firebase complaining about undefined
}

export class UserOtherProfileDescriptor {
  websiteName: string
  urlPrefix: string
  whatIsEnough?: string
  iconClass?: string
  iconImg?: string
  id?: string

  constructor(initFrom: UserOtherProfileDescriptor) {
    Object.assign(this, initFrom)
    if ( ! this.whatIsEnough ) {
      this.whatIsEnough = 'user name is'
    }
  }
}

export class UserOtherProfilesDescriptors<T> {
  twitter: T;
  linkedIn: T;
  gitHub: T;
  stackOverflow: T;
  facebook: T;
}

@Component({
  selector: 'app-user-other-profiles',
  templateUrl: './user-other-profiles.component.html',
  styleUrls: ['./user-other-profiles.component.scss'],
})
export class UserOtherProfilesComponent implements OnInit {

  // descriptors: UserOtherProfilesDescriptors<UserOtherProfileDescriptor> = [
  descriptorsMap = {
    twitter: new UserOtherProfileDescriptor({
      websiteName: 'Twitter',
      urlPrefix: 'twitter.com/',
      iconClass: 'ion-social-twitter',
    }),
    linkedIn: new UserOtherProfileDescriptor({
      websiteName: 'LinkedIn',
      urlPrefix: 'linkedin.com/in/',
      iconClass: 'ion-social-linkedin',
    }),
    facebook: new UserOtherProfileDescriptor({
      websiteName: 'Facebook',
      urlPrefix: 'facebook.com/',
      iconClass: 'ion-social-facebook',
    }),
    gitHub: new UserOtherProfileDescriptor({
      websiteName: 'GitHub',
      urlPrefix: 'github.com/',
      iconClass: 'ion-social-github',
    }),
    stackOverflow: new UserOtherProfileDescriptor({
      websiteName: 'StackOverflow',
      urlPrefix: 'stackoverflow.com/users/',
      iconImg: 'assets/images/logos/stackoverflow-black.svg',
      whatIsEnough: 'user id and name are'
    }),
  }

  formControls: UserOtherProfilesDescriptors<FormControl>

  descriptorsList = this.prepareDescriptorsList()

  private prepareDescriptorsList() {
    this.formControls = <any> {}
    let ret = []
    for ( let key in this.descriptorsMap ) {
      if (this.descriptorsMap.hasOwnProperty(key)) {
        // console.log('key: ', key)
        let descriptor = this.descriptorsMap[key]
        descriptor.id = key
        ret.push(descriptor)
        this.formControls[key] = new FormControl()
      }
    }
    return ret
  }

  @Input() public parentFormGroup: FormGroup;
  @Input() public userProfileInputs: UserProfileInputs
  public formGroup: FormGroup;


  public otherProfiles: UserOtherProfiles

  constructor(
    private formBuilder: FormBuilder,
    private userProfileService: UserProfileService,
  ) {
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

  private applyFromDb(otherProfiles: UserOtherProfiles) {
    this.otherProfiles = otherProfiles;
    if (otherProfiles) {
      // FIXME: setValue instead of patchValue (because some might be undefined)
      // this.formGroup.setValue({
      this.formGroup.patchValue({
        linkedIn: getOtherProfileName(otherProfiles.linkedIn),
        gitHub: getOtherProfileName(otherProfiles.gitHub),
        stackOverflow: getOtherProfileName(otherProfiles.stackOverflow),
        twitter: getOtherProfileName(otherProfiles.twitter),
        facebook: getOtherProfileName(otherProfiles.facebook),
      })
    }
    this.formGroup.markAsPristine()
  }

  getOtherProfiles(): UserOtherProfiles {
    return {
      linkedIn: {
        userName: otherProfileUserName(this.formControls.linkedIn),
      },
      gitHub: {
        userName: otherProfileUserName(this.formControls.gitHub),
      },
      stackOverflow: {
        userName: otherProfileUserName(this.formControls.stackOverflow),
      },
      twitter: {
        userName: otherProfileUserName(this.formControls.twitter),
      },
      facebook: {
        userName: otherProfileUserName(this.formControls.facebook),
      },
    };
  }
}
