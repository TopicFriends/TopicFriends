import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileBasicInfoComponent } from './user-profile-basic-info/user-profile-basic-info.component';
import {UserProfileComponent} from './user-profile.component'
import {Routes, RouterModule} from '@angular/router'
import {SharedModule} from '../shared/shared.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MdAutocompleteModule, MdButtonModule, MdIconModule, MdInputModule} from '@angular/material'
import {UserOtherProfilesComponent} from './user-other-profiles/user-other-profiles.component'
import {ItemListInputComponent} from './item-list-input/item-list-input.component'
import {WhatUserWantsFormComponent} from './what-user-wants-form/what-user-wants-form.component'


const userProfileRoutes: Routes = [
  {
    path: 'profile',
    component: UserProfileComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(userProfileRoutes),
    FormsModule,
    ReactiveFormsModule,
    MdInputModule,
    MdIconModule,
    MdAutocompleteModule,
    MdButtonModule,
  ],
  declarations: [
    UserProfileComponent,
    UserProfileBasicInfoComponent,
    UserOtherProfilesComponent,
    ItemListInputComponent,
    WhatUserWantsFormComponent,
  ],
  exports: [
    UserProfileComponent,
    ItemListInputComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class UserProfileModule { }
