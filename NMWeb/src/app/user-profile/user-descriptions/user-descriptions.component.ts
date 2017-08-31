import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import {UserDescriptionsService} from '../../shared/user-profile/user-descriptions.service'
import {AuthService} from '../auth.service'
import {UserDescriptions} from '../user-profile.service'


const formDefinition = {
  description: '',
  whatDoYouExpectFromTheApp: '',
}

@Component({
  selector: 'app-user-description',
  templateUrl: './user-descriptions.component.html',
  styleUrls: ['./user-descriptions.component.scss']
})
export class UserDescriptionsComponent implements OnInit {

  formGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private userDescriptionsService: UserDescriptionsService,
  ) {
    this.formGroup = this.formBuilder.group(formDefinition)
    this.userDescriptionsService.subscribeToCurrentUserDescriptions(userDescriptions => {
      this.applyFromDb(userDescriptions)
    })
  }

  ngOnInit() {
  }

  getValue(): UserDescriptions {
    return {
      descriptions:
        this.formGroup.value
    }
  }

  private applyFromDb(userDescriptions: UserDescriptions) {
    console.log('userDescriptions', userDescriptions)
    if ( userDescriptions && userDescriptions.descriptions ) {
      this.formGroup.setValue(userDescriptions.descriptions)
    }
  }

}
