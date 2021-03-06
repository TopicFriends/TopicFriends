import { Injectable } from '@angular/core';
import {
  DbList,
  DbService,
} from '../../shared/db.service'
import { AuthService } from '../../user-profile-shared/auth.service'
import 'rxjs/add/operator/switchMap';
import { DomainDbService } from '../../shared/domain-db.service'


export class UserDescription {
  text: string
}

export class UserDescriptions {
  descriptions: {
    /* or textDescriptions. For future: ask myself, what other descriptions can there be apart from textual?
       graphics? That would probably go into another firebase node...
       What graphics? Background? User map pin? This is not a description.
       TODO: rename the whole Firebase list-root-node to UserTextDescriptions ?
     */
    myDescription: UserDescription, /* or userDescription? */
    whatDoYouExpectFromTheApp: UserDescription,
    adviceOnContactingMe: UserDescription, /* TODO: contacting / meeting */
    howDidYouFindThisCommunity: UserDescription, /* TODO: standardize this/the, app/community -> this community */
  }
}

@Injectable()
export class UserDescriptionsService {

  DB_PATH = this.domainDbService.PATHS.DESCRIPTIONS

  constructor(
    private authService: AuthService,
    private dbService: DbService,
    private domainDbService: DomainDbService,
  ) {
  }

  subscribeToCurrentUserDescriptions(handler: (e: UserDescriptions) => any ) {
    return this.authService.user.switchMap(user => {
      return this.dbService.objectById(this.DB_PATH, user.uid)
    }).subscribe(handler)
  }

  listUserDescriptions(): DbList<UserDescriptions> {
    return this.dbService.list(this.domainDbService.PATHS.DESCRIPTIONS);
  }

}
