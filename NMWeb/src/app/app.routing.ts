import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import {UserGroupsComponent} from './user-groups/user-groups.component'
import {TopicsListComponent} from './topics-list/topics-list.component'
import {TermsOfServiceComponent} from './terms-of-service/terms-of-service.component'
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component'
import {TopicsMapPageComponent} from './topics-map-page/topics-map-page.component'
import {TOPIC_ID_PARAM} from "./shared/routes";

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'app/landing-page/landing-page.module#LandingPageModule',
  },
  {
    path: 'people-list',
    redirectTo: 'people',
  },
  {
    path: 'people',
    loadChildren: 'app/user-list-page/user-list-page.module#UserListPageModule',
  },
  {
    path: 'favors',
    loadChildren: './favors/favors.module#FavorsModule',
  },
  {
    path: 'meetings',
    loadChildren: './meetings/meetings.module#MeetingsModule',
  },
  {
    path: 'meeting-list',
    redirectTo: 'meetings',
  },
  {
    path: 'meeting',
    loadChildren: './meetings/meetings.module#MeetingsModule',
  },
  {
    path: 'meeting-details',
    redirectTo: 'meeting',
  },
  {
    path: 'topics',
    component: TopicsListComponent,
  },
  {
    path: 'groups',
    component: UserGroupsComponent,
  },
  {
    path: 'about',
    loadChildren: 'app/about-page/about-page.module#AboutPageModule',
  },
  {
    path: 'topic/:' + TOPIC_ID_PARAM,
    loadChildren: 'app/topic-details/topic-details.module#TopicDetailsModule',
  },
  {
    path: 'terms',
    component: TermsOfServiceComponent,
  },
  {
    path: 'profile',
    loadChildren: 'app/user-profile-details/user-profile-details.module#UserProfileDetailsModule',
  },
  {
    path: 'config',
    loadChildren: 'app/user-config/user-config.module#UserConfigModule',
  },
  {
    path: 'user', /* workaround to support older urls which were /user/<user-id> */
    redirectTo: 'u',
  },
  {
    path: 'u',
    loadChildren: 'app/user-profile-details/user-profile-details.module#UserProfileDetailsModule',
  },
  {
    path: 'privacy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'topics-map',
    component: TopicsMapPageComponent
    //loadChildren: 'app/topics-map-page/topics-map-page.module#TopicsMapPageComponent'
  },
  {
    path: '**',
    loadChildren: 'app/page-not-found/page-not-found.module#PageNotFoundModule',
  },

]

export const routingModule = RouterModule.forRoot(
  appRoutes,
  { preloadingStrategy: PreloadAllModules }
);
