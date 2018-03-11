import { Injectable } from '@angular/core';
import {DbListReadOnly, DbObject, DbService} from '../db.service'
import {UserDescriptions} from './user-profile.service'
import {DomainDbService} from '../domain-db.service'
import {AuthService} from './auth.service'
import 'rxjs/add/operator/switchMap';


@Injectable()
export class UserDescriptionsService {

  DB_PATH = this.domainDbService.PATHS.DESCRIPTIONS

  constructor(
    private authService: AuthService,
    private dbService: DbService,
    private domainDbService: DomainDbService
  ) {
  }

  subscribeToCurrentUserDescriptions(handler: (e: UserDescriptions) => any ) {
    return this.authService.user.switchMap(user => {
      return this.dbService.objectById(this.DB_PATH, user.uid)
    }).subscribe(handler)
  }

}
