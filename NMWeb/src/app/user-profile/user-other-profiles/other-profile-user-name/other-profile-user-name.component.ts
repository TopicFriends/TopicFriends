import {Component, Input, OnInit} from '@angular/core';
import {UserOtherProfileDescriptor} from '../user-other-profiles.component'
import {UserProfileInputs} from '../../user-profile.component'
import {FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-other-profile-user-name',
  templateUrl: './other-profile-user-name.component.html',
  styleUrls: ['./other-profile-user-name.component.scss']
})
export class OtherProfileUserNameComponent implements OnInit {

  @Input() descriptor: UserOtherProfileDescriptor
  @Input() parentFormGroup: FormGroup
  @Input() thisFormControl: FormControl

  @Input() userProfileInputs: UserProfileInputs

  urlNoProtocol: string
  fullUrl: string
  userName: string

  constructor() { }

  ngOnInit() {
    if ( ! this.userProfileInputs.isEditable ) {
      this.thisFormControl.valueChanges.subscribe(values => {
        this.userName = this.thisFormControl.value
        this.urlNoProtocol = this.userName && this.descriptor.urlPrefix + this.userName
        this.fullUrl = this.userName && ('https://' + this.urlNoProtocol)
      })
    }
  }

}
