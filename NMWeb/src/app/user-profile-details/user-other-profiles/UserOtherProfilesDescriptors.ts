import { FormControl } from '@angular/forms'
import { OtherProfile } from '../../user-profile-shared/user-other-profiles.service'

export function getOtherProfileName(otherProfile: OtherProfile) {
  return otherProfile && otherProfile.userName
}

export function otherProfileUserName(formControl: FormControl) {
  // return formControl.value || "" // || "" to prevent firebase complaining about undefined
  return formControl.value || null // || "" to prevent firebase complaining about undefined
}

export class UserOtherProfileDescriptor {
  websiteName?: string
  urlPrefix: string
  whatIsEnough?: string
  whatIsEnoughVerb?: string
  iconClass?: string
  iconImg?: string
  id?: string

  constructor(initFrom: UserOtherProfileDescriptor) {
    Object.assign(this, initFrom)
    if (!this.whatIsEnough) {
      this.whatIsEnough = 'user name'
      this.whatIsEnoughVerb = 'is'
    }
  }
}

export type UserOtherProfilesDescriptorVals<T> = Partial<{
  [P in keyof UserOtherProfilesDescriptorsDefs]: T // https://www.typescriptlang.org/docs/handbook/advanced-types.html - TypeScript Mapped Types
}>

export function descriptor(d: UserOtherProfileDescriptor) {
  return new UserOtherProfileDescriptor(d)
}

export class UserOtherProfilesDescriptorsDefs {
  twitter = descriptor({
    websiteName: 'Twitter',
    urlPrefix: 'twitter.com/',
    // iconClass: 'ion-social-twitter',
  })
  linkedIn = descriptor({
    websiteName: 'LinkedIn',
    urlPrefix: 'linkedin.com/in/',
    iconClass: 'ion-social-linkedin',
  })
  facebook = descriptor({
    websiteName: 'Facebook',
    urlPrefix: 'facebook.com/',
    // iconClass: 'ion-social-facebook',
  })
  gitHub = descriptor({
    websiteName: 'GitHub',
    urlPrefix: 'github.com/',
    // iconClass: 'ion-social-github',
    iconImg: 'assets/images/logos/github-icon.svg',
  })
  stackOverflow = descriptor({
    websiteName: 'StackOverflow',
    urlPrefix: 'stackoverflow.com/users/',
    iconImg: 'assets/images/logos/stackoverflow_icon.svg',
    whatIsEnough: 'user id and name',
    whatIsEnoughVerb: 'are',
  })
  StackShare = descriptor({
    // urlPrefix: 'https://stackshare.io/',
    urlPrefix: 'stackshare.io/',
  })
  AngelList = descriptor({
    // urlPrefix: 'https://angel.co/',
    urlPrefix: 'angel.co/',
  })

}
