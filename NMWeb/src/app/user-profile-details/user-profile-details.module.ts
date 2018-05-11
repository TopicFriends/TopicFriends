import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserProfileSharedModule} from '../user-profile-shared/user-profile-shared.module'
import {UserDescriptionsComponent} from './user-descriptions/user-descriptions.component'
import {UserInterestsComponent} from './user-interests/user-interests.component'
import {UserGeoLocationsComponent} from './user-geo-locations/user-geo-locations.component'
import {UserOtherProfilesComponent} from './user-other-profiles/user-other-profiles.component'
import {UserProfileBasicInfoComponent} from './user-profile-basic-info/user-profile-basic-info.component'
import {TopicGroupCardComponent} from './user-interests/topic-group-card/topic-group-card.component'
import {TopicGroupSupplyDemandCardComponent} from './user-interests/topic-group-supply-demand-card/topic-group-supply-demand-card.component'
import {UserGeoLocationComponent} from './user-geo-locations/user-geo-location/user-geo-location.component'
import { UserWebsiteComponent } from './user-other-profiles/user-website/user-website.component'
import { UserSkillsComponent } from './user-skills/user-skills.component'
import { UserSkillComponent } from './user-skills/user-skill/user-skill.component'
import { UserSkillsListComponent } from './user-skills/user-skills-list/user-skills-list.component'
import {
  UserProfileDetailsComponent,
} from './user-profile-details.component'
import { SharedModule } from '../shared/shared.module'
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'
import {
  MatCardModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule,
  MatDialogModule,
  MatSlideToggleModule
} from '@angular/material'
import { OtherProfileUserNameComponent } from './user-other-profiles/other-profile-user-name/other-profile-user-name.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { Observable } from 'rxjs/Observable'
import { UserProfileDetailsRoutingModule } from './user-profile-details-routing.module'
import {MapsModule} from '../maps/maps.module'
import {HeaderComponent} from "../core/header/header.component";
import { UserProjectsComponent } from './user-projects/user-projects.component';
import { DialogCreateProjectComponent } from './user-projects/dialog-create-project/dialog-create-project.component';
import { UserFavorsComponent } from './user-favors/user-favors.component';
import { ProjectComponent } from './user-projects/project/project.component';


/** User profile editing/viewing here */
@NgModule({
  imports: [
    CommonModule,
    UserProfileDetailsRoutingModule,
    SharedModule,
    UserProfileSharedModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    MatSlideToggleModule,
    MapsModule
  ],
  declarations: [
    UserDescriptionsComponent,
    UserInterestsComponent,
    UserSkillsComponent,
    UserGeoLocationsComponent,
    UserOtherProfilesComponent,
    UserProfileBasicInfoComponent,
    TopicGroupCardComponent,
    TopicGroupSupplyDemandCardComponent,
    UserGeoLocationComponent,
    UserWebsiteComponent,
    UserSkillComponent,
    UserSkillsListComponent,
    UserProfileDetailsComponent,
    OtherProfileUserNameComponent,
    UserProjectsComponent,
    DialogCreateProjectComponent,
    UserFavorsComponent,
    ProjectComponent,
  ],
  providers: [
    HeaderComponent
  ],
  entryComponents: [DialogCreateProjectComponent]
})
export class UserProfileDetailsModule { }
