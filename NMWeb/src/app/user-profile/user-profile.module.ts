import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileBasicInfoComponent } from './user-profile-basic-info/user-profile-basic-info.component';
import {CanDeactivateUserProfileGuard, UserProfileComponent} from './user-profile.component'
import {Routes, RouterModule, ActivatedRouteSnapshot, RouteReuseStrategy, DetachedRouteHandle} from '@angular/router'
import {SharedModule} from '../shared/shared.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {
  MatAutocompleteModule, MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatSelectModule,
  MatTextareaAutosize, MatDialogModule, MatButtonToggleModule, MatListModule, MatExpansionModule
} from '@angular/material'
import {UserOtherProfilesComponent} from './user-other-profiles/user-other-profiles.component'
import {ItemListInputComponent} from './item-list-input/item-list-input.component'
import { UserInterestsComponent } from './user-interests/user-interests.component'
import { UserGeoLocationsComponent } from './user-geo-locations/user-geo-locations.component';
import { UserGeoLocationComponent } from './user-geo-locations/user-geo-location/user-geo-location.component'
import {MapsModule} from '../maps/maps.module';
import { UserDescriptionsComponent } from './user-descriptions/user-descriptions.component';
import { TopicGroupCardComponent } from './user-interests/topic-group-card/topic-group-card.component';
import { TopicGroupSupplyDemandCardComponent } from './user-interests/topic-group-supply-demand-card/topic-group-supply-demand-card.component';
import { TextAreaComponent } from './user-descriptions/text-area/text-area.component';
import { OtherProfileUserNameComponent } from './user-other-profiles/other-profile-user-name/other-profile-user-name.component';
import { UserWebsiteComponent } from './user-other-profiles/user-website/user-website.component'
import {DefaultRouteReuseStrategy} from '@angular/router/src/route_reuse_strategy';
import { CreateTopicComponent } from './user-interests/create-topic/create-topic.component';
import { UserSkillsComponent } from './user-skills/user-skills.component';
import { UserSkillComponent } from './user-skills/user-skill/user-skill.component'
import {SkillLevelPopoverComponent} from "./user-interest-configuration-dialog/skill-level-popover/skill-level-popover.component";
import {CapitalizeFirstPipe} from "../shared/pipes/capitalize-first.pipe";
import { SkillLevelsComponent } from './user-interest-configuration-dialog/skill-levels/skill-levels.component';
import { SkillLevelLabelComponent } from './user-skills/skill-level-label/skill-level-label.component';
import { UserSkillsListComponent } from './user-skills/user-skills-list/user-skills-list.component';
import { UserInterestConfigurationDialogComponent } from './user-interest-configuration-dialog/user-interest-configuration-dialog.component';
import { BasicActionsButtonGroupComponent } from './user-interest-configuration-dialog/basic-actions-button-group/basic-actions-button-group.component';
import { SupplyDemandButtonGroupComponent } from './user-interest-configuration-dialog/supply-demand-button-group/supply-demand-button-group.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {TopicLogoComponent} from "../topic-logo/topic-logo.component";

export const USER_PROFILE_ID_PARAM_NO_COLON = 'userId'

export const USER_ROUTE_WITH_TRAILING_SLASH = 'user/'

const userProfileRoutes: Routes = [
  {
    path: 'profile',
    component: UserProfileComponent,
    canDeactivate: [CanDeactivateUserProfileGuard],
    // data: { reuse: false },
  },
  {
    path: USER_ROUTE_WITH_TRAILING_SLASH + ':' + USER_PROFILE_ID_PARAM_NO_COLON,
    component: UserProfileComponent,
    // data: { reuse: false },
  },
];

// https://stackoverflow.com/questions/44875644/custom-routereusestrategy-for-angulars-child-module/44876414#44876414
// https://medium.com/@gerasimov.pk/how-to-reuse-rendered-component-in-angular-2-3-with-routereusestrategy-64628e1ca3eb
// https://www.softwarearchitekt.at/post/2016/12/02/sticky-routes-in-angular-2-3-with-routereusestrategy.aspx
// https://stackoverflow.com/questions/41280471/how-to-implement-routereusestrategy-shoulddetach-for-specific-routes-in-angular
// https://medium.com/@juliapassynkova/angular-2-component-reuse-strategy-9f3ddfab23f5
// export class CustomRouteReuseStrategy extends DefaultRouteReuseStrategy {
//   shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
//     return false
//     // let name = future.component && (<any>future.component).name;
//     // return super.shouldReuseRoute(future, curr) && name !== 'DetailSameComponent';
//   }
// }

export class CustomRouteReuseStrategy extends RouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean { return false; }
  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {}
  shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle { return null !; }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return false
    // return future.routeConfig === curr.routeConfig ;
  }
}

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(userProfileRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MapsModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatListModule,
    MatExpansionModule,
    FlexLayoutModule
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
    TopicGroupCardComponent,
    TopicGroupSupplyDemandCardComponent,
    TextAreaComponent,
    OtherProfileUserNameComponent,
    UserWebsiteComponent,
    CreateTopicComponent,
    UserSkillsComponent,
    UserSkillComponent,
    SkillLevelPopoverComponent,
    CapitalizeFirstPipe,
    SkillLevelsComponent,
    SkillLevelLabelComponent,
    UserSkillsListComponent,
    UserInterestConfigurationDialogComponent,
    BasicActionsButtonGroupComponent,
    SupplyDemandButtonGroupComponent,
    TopicLogoComponent,
  ],
  providers: [
    CanDeactivateUserProfileGuard,
    // {
    //   provide: RouteReuseStrategy,
    //   useClass: CustomRouteReuseStrategy
    // },
  ],
  entryComponents: [ SkillLevelPopoverComponent, UserInterestConfigurationDialogComponent ],
  exports: [
  ],
  schemas: [
    // CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class UserProfileModule { }
