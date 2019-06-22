import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListCombinedService } from './user-list-combined.service'
import { UserTopicsService } from './user-topics.service'
import { UserOtherProfilesService } from './user-other-profiles.service'
import { UserGeoLocationsService } from './user-geo-locations.service'
import { UserDescriptionsService } from './user-descriptions.service'
import { UserSkillsService } from './user-skills.service'
import { UserProfileService } from './user-profile.service'
import { UserListService } from './user-list.service'
import { UserMatcherService } from './user-matcher.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UserListCombinedService,
    UserTopicsService,
    UserOtherProfilesService,
    UserTopicsService,
    UserGeoLocationsService,
    UserDescriptionsService,
    UserSkillsService,
    UserProfileService,
    UserListService,
    UserMatcherService,
  ]
})
export class UserProfileCoreModule { }
