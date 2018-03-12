import {Injectable} from '@angular/core';
import {OtherProfile} from './user-profile.service'
import {DbList, DbService} from '../db.service'
import { DomainDbService } from '../shared/domain-db.service'


export class UserOtherProfiles {

  linkedIn?: OtherProfile;
  gitHub?: OtherProfile;
  stackOverflow?: OtherProfile;
  twitter?: OtherProfile;
  facebook?: OtherProfile;
  website?: OtherProfile;

  // Phone number/whatsapp
  // telegram (phone?)
  // google / hangouts
  // slack?
  // TODO: companyWebsite
  // blog

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

