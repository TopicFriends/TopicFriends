import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  ActivatedRouteSnapshot,
  RouteReuseStrategy,
  DetachedRouteHandle,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import {
  UserProfileDetailsComponent,
} from './user-profile-details.component'
import {
  USER_PROFILE_ID_PARAM_NO_COLON,
  USER_ROUTE_WITH_TRAILING_SLASH,
} from '../../shared/routes'
import { Observable } from 'rxjs/Observable'

export class CanDeactivateUserProfileGuard implements CanDeactivate<UserProfileDetailsComponent> {

  canDeactivate(
    component: UserProfileDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    let canDeactivate = component.canDeactivate()
    if ( ! canDeactivate ) {
      canDeactivate = window.confirm('You have unsaved changes. Do you really want to leave?')
    }
    return canDeactivate
  }
}


const routes: Routes = [
  {
    path: '',
    component: UserProfileDetailsComponent,
    canDeactivate: [CanDeactivateUserProfileGuard],
    // data: { reuse: false },
  },
  {
    path: 'u/:' + USER_PROFILE_ID_PARAM_NO_COLON,
    component: UserProfileDetailsComponent,
  },
  {
    path: ':' + USER_PROFILE_ID_PARAM_NO_COLON,
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    CanDeactivateUserProfileGuard,
  ]
})
export class UserProfileDetailsRoutingModule { }
