import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserProfileModule} from '../user-profile/user-profile.module'
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
  CanDeactivateUserProfileGuard,
  UserProfileDetailsComponent,
} from './user-profile-details.component'
import {
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  RouteReuseStrategy,
  RouterModule,
  Routes,
} from '@angular/router'


// Consider moving to smth like `routes.ts` in shared module
export const USER_PROFILE_ID_PARAM_NO_COLON = 'userId'

export const USER_ROUTE_WITH_TRAILING_SLASH = 'user/'


const userProfileRoutes: Routes = [
  {
    path: 'profile',
    component: UserProfileDetailsComponent,
    canDeactivate: [CanDeactivateUserProfileGuard],
    // data: { reuse: false },
  },
  {
    path: 'config',
    loadChildren: '../user-config/user-config.module#UserConfigModule'
  },
  {
    path: 'u/:' + USER_PROFILE_ID_PARAM_NO_COLON,
    component: UserProfileDetailsComponent,
  },
  {
    path: USER_ROUTE_WITH_TRAILING_SLASH + ':' + USER_PROFILE_ID_PARAM_NO_COLON,
    component: UserProfileDetailsComponent,
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

// TODO: split modules: user-profile (services mostly? ; also used by e.g. maps, user-list) and user-profile-details (edit/view)
// keep lazy-loading in mind

/** User profile editing/viewing here */
@NgModule({
  imports: [
    CommonModule,
    UserProfileModule,
    RouterModule.forChild(userProfileRoutes),
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
    UserProfileDetailsComponent
  ]
})
export class UserProfileDetailsModule { }
