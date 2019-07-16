import { Injectable } from '@angular/core';
import {
  UserData,
  UserDataCombined,
  UserProfileService,
} from 'app/user-profile/user-profile-core/user-profile.service';
import {DbListReadOnly} from '../../shared/db.service';
import {Observable} from 'rxjs/Observable'
import {arrayOfObservablesToObservableOfArray} from '../../util/utils'

@Injectable()
export class UserListService {

  constructor(
    private userProfileService: UserProfileService,
  ) {
  }

  public listUserData(): DbListReadOnly<UserData> {
    let listUserDataWithDetails: DbListReadOnly<UserData> = this.userProfileService.listUserDataWithDetails();
    return listUserDataWithDetails;
  }

  public listUserDataCombined(): Observable<Array<UserDataCombined>> {
    let listUserDataWithDetails: DbListReadOnly<UserData> = this.userProfileService.listUserDataWithDetails();

    let obsOfArrayOfObsUDC = listUserDataWithDetails.map((arrayOfUserData: Array<UserData>) => {
      return arrayOfUserData.map(ud => {
        return ud.combineLatest()
      })
    })

    const switchMap: Observable<Array<UserDataCombined>> = obsOfArrayOfObsUDC.switchMap((arr: Array<Observable<UserDataCombined>>) => {
      let observableOfArray: Observable<Array<UserDataCombined>> = arrayOfObservablesToObservableOfArray<UserDataCombined>(arr)
      return observableOfArray
    })
    return switchMap

  }
}
