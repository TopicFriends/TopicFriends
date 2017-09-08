import {Component, Input, OnInit, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import {UserDescriptionsService} from '../../shared/user-profile/user-descriptions.service'
import {UserDescriptions} from '../user-profile.service'
import {MdTextareaAutosize} from '@angular/material'
import {TextAreaComponent} from './text-area/text-area.component'



@Component({
  selector: 'app-user-description',
  templateUrl: './user-descriptions.component.html',
  styleUrls: ['./user-descriptions.component.scss']
})
export class UserDescriptionsComponent implements OnInit {


  @Input() thisFormGroup: FormGroup
  // @Input() parentFormGroup: FormGroup

  @ViewChildren(TextAreaComponent) textAreas

  constructor(
    private formBuilder: FormBuilder,
    private userDescriptionsService: UserDescriptionsService,
  ) {
  }

  ngOnInit() {
    this.userDescriptionsService.subscribeToCurrentUserDescriptions(userDescriptions => {
      this.applyFromDb(userDescriptions)
    })
  }

  getValue(): UserDescriptions {
    return this.thisFormGroup.value
  }

  private applyFromDb(userDescriptions: UserDescriptions) {
    if ( userDescriptions ) {
      // this.formGroup.setValue(userDescriptions.descriptions)
      // FIXME: fill missing values and use setValue
      this.thisFormGroup.patchValue(userDescriptions)
      this.textAreas.forEach((t: TextAreaComponent) => {
        t.autoResizeTextArea()
      })
    }
  }


  static buildFormGroup(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      descriptions: /* -> textDescriptions */ formBuilder.group({
        myDescription: TextAreaComponent.buildFormGroup(formBuilder),
        whatDoYouExpectFromTheApp: TextAreaComponent.buildFormGroup(formBuilder),
        adviceOnContactingMe: TextAreaComponent.buildFormGroup(formBuilder),
        howDidYouFindThisCommunity: TextAreaComponent.buildFormGroup(formBuilder),
      })
    })
  }

  getDescriptionsFormGroup() {
    return this.thisFormGroup.get('descriptions')
  }

}
