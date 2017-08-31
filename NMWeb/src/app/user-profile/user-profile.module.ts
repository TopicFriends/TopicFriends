import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileBasicInfoComponent } from './user-profile-basic-info/user-profile-basic-info.component';
import {UserProfileComponent} from './user-profile.component'
import {Routes, RouterModule} from '@angular/router'
import {SharedModule} from '../shared/shared.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MdAutocompleteModule, MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdTextareaAutosize} from '@angular/material'
import {UserOtherProfilesComponent} from './user-other-profiles/user-other-profiles.component'
import {ItemListInputComponent} from './item-list-input/item-list-input.component'
import { UserInterestsComponent } from './user-interests/user-interests.component'
import { UserGeoLocationsComponent } from './user-geo-locations/user-geo-locations.component';
import { UserGeoLocationComponent } from './user-geo-locations/user-geo-location/user-geo-location.component'
import {MapsModule} from '../maps/maps.module';
import { UserDescriptionsComponent } from './user-descriptions/user-descriptions.component'


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
    MdCardModule,
    MapsModule,
  ],
  declarations: [
    UserProfileComponent,
    UserProfileBasicInfoComponent,
    UserOtherProfilesComponent,
    ItemListInputComponent,
    UserInterestsComponent,
    UserGeoLocationsComponent,
    UserGeoLocationComponent,
    UserDescriptionsComponent,
  ],
  exports: [
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class UserProfileModule { }
