import { Injectable } from '@angular/core';
import {
  DbList,
  DbService,
} from '../../shared/db.service'
import { DomainDbService } from '../../shared/domain-db.service'


export class OtherProfile {
  userName?: string;
  url?: string;
  show?: boolean;
}

/** TODO: TS mapped type: UserOtherProfilesDescriptorVals<OtherProfile> */
export class UserOtherProfiles {

  linkedIn?: OtherProfile;
  gitHub?: OtherProfile;
  stackOverflow?: OtherProfile;
  twitter?: OtherProfile;
  facebook?: OtherProfile;
  website?: OtherProfile;

  // Phone number(s)/whatsapp
  // telegram (phone(s)?)
  // google / hangouts
  // slack?
  // TODO: companyWebsite
  // blog(s)
  // email(s)

}

@Injectable()
export class UserOtherProfilesService {

  constructor(
    private db: DbService,
    private domainDbService: DomainDbService,
  ) { }

  listOtherProfiles(): DbList<UserOtherProfiles> {
    return this.db.list(this.domainDbService.PATHS.OTHER_PROFILES);
  }

}

