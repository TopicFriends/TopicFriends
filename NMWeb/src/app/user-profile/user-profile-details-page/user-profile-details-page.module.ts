import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserProfileSharedModule} from '../user-profile-shared/user-profile-shared.module'
import {UserDescriptionsComponent} from './user-descriptions/user-descriptions.component'
import {UserProfileInterestsSectionComponent} from './user-interests-section/user-profile-interests-section.component'
import {UserGeoLocationsComponent} from './user-geo-locations/user-geo-locations.component'
import {UserOtherProfilesComponent} from './user-other-profiles/user-other-profiles.component'
import {UserProfileBasicInfoComponent} from './user-profile-basic-info/user-profile-basic-info.component'
import {TopicGroupCardComponent} from './user-interests-section/topic-group-card/topic-group-card.component'
import {TopicGroupSupplyDemandCardComponent} from './user-interests-section/topic-group-supply-demand-card/topic-group-supply-demand-card.component'
import {UserGeoLocationComponent} from './user-geo-locations/user-geo-location/user-geo-location.component'
import { UserWebsiteComponent } from './user-other-profiles/user-website/user-website.component'
import { UserProfileInterestsAndSkillsSectionComponent } from './user-interests-and-skills-section/user-profile-interests-and-skills-section.component'
import { UserSkillComponent } from './user-interests-and-skills-section/user-skill/user-skill.component'
import { UserSkillsListComponent } from './user-interests-and-skills-section/user-skills-list/user-skills-list.component'
import {
  UserProfileDetailsComponent,
} from './user-profile-details.component'
import { SharedModule } from '../../shared/shared.module'
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'
import {
  MatCardModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule,
} from '@angular/material'
import { OtherProfileUserNameComponent } from './user-other-profiles/other-profile-user-name/other-profile-user-name.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { UserProfileDetailsRoutingModule } from './user-profile-details-routing.module'
import {MapsModule} from '../../maps/maps.module'
import {HeaderComponent} from "../../core/header/header.component";
import { TopicsSharedModule } from '../../topics/topics-shared/topics-shared.module'
import { TopicsEditSharedModule } from '../../topics/topics-edit-shared/topics-edit-shared.module'
import { TopicSkillsSharedModule } from '../../skills/topic-skills-shared/topic-skills-shared.module'
import { SkillsSharedModule } from '../../skills/skills-shared/skills-shared.module'


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
    MapsModule,
    TopicsSharedModule,
    TopicSkillsSharedModule,
    SkillsSharedModule,
    TopicsEditSharedModule,
  ],
  declarations: [
    UserDescriptionsComponent,
    UserProfileInterestsSectionComponent,
    UserProfileInterestsAndSkillsSectionComponent,
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
  ],
  exports: [
    UserSkillComponent,
  ],
  providers: [
    HeaderComponent,
  ],
})
export class UserProfileDetailsPageModule { }
