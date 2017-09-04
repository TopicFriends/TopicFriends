import {Component, OnInit, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import {UserDescriptionsService} from '../../shared/user-profile/user-descriptions.service'
import {UserDescriptions} from '../user-profile.service'
import {MdTextareaAutosize} from '@angular/material'


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
  @ViewChildren(MdTextareaAutosize) textAreas

  constructor(
    private formBuilder: FormBuilder,
    private userDescriptionsService: UserDescriptionsService,
  ) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group(formDefinition)
    this.userDescriptionsService.subscribeToCurrentUserDescriptions(userDescriptions => {
      this.applyFromDb(userDescriptions)
    })
  }

  getValue(): UserDescriptions {
    return {
      descriptions:
        this.formGroup.value
    }
  }

  private applyFromDb(userDescriptions: UserDescriptions) {
    if ( userDescriptions && userDescriptions.descriptions ) {
      this.formGroup.setValue(userDescriptions.descriptions)
    }
    this.autoResizeTextAreas()
  }

  private autoResizeTextAreas() {
    this.textAreas.forEach(area => {
      // https://github.com/angular/material2/issues/5247
      // -> http://plnkr.co/edit/gdZ6jOmQyzj2gg7ori44?p=preview
      // -> https://github.com/angular/material2/issues/4657 (closed Jul 20)
      area.resizeToFitContent()
    })
  }

}
