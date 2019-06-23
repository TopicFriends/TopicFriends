import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './other/landing-page/landing-page.module#LandingPageModule',
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
    loadChildren: 'app/favors/favors.module#FavorsModule',
  },
  {
    path: 'meetings',
    loadChildren: 'app/meetings/meetings.module#MeetingsModule',
  },
  {
    path: 'meeting-list',
    redirectTo: 'meetings',
  },
  {
    path: 'meeting',
    loadChildren: 'app/meetings/meetings.module#MeetingsModule',
  },
  {
    path: 'meeting-details',
    redirectTo: 'meeting',
  },
  {
    path: 'topics',
    loadChildren: 'app/topics/topics-list-page/topics-list-page.module#TopicsListPageModule',
  },
  {
    path: 'topic',
    loadChildren: 'app/topics/topic-details-page/topic-details-page.module#TopicDetailsPageModule',
  },
  {
    path: 'about',
    loadChildren: 'app/about-page/about-page.module#AboutPageModule',
  },
  {
    path: 'terms',
    loadChildren: 'app/other/terms-of-service-page/terms-of-service-page.module#TermsOfServicePageModule',
  },
  {
    path: 'profile',
    loadChildren: 'app/user-profile/user-profile-details/user-profile-details.module#UserProfileDetailsModule',
  },
  {
    path: 'config',
    loadChildren: 'app/user-profile/user-config/user-config.module#UserConfigModule',
  },
  {
    path: 'user', /* workaround to support older urls which were /user/<user-id> */
    redirectTo: 'u',
  },
  {
    path: 'u',
    loadChildren: 'app/user-profile/user-profile-details/user-profile-details.module#UserProfileDetailsModule',
  },
  {
    path: 'privacy',
    loadChildren: './other/privacy-policy-page/privacy-policy-page.module#PrivacyPolicyPageModule',
  },
  {
    path: `topics-map`,
    loadChildren: './topics/topics-map-page/topics-map-page.module#TopicsMapPageModule'
  },
  {
    path: 'map',
    loadChildren: './maps/users-map-page/users-map-page.module#UsersMapPageModule'
  },
  {
    path: '**',
    loadChildren: './other/page-not-found/page-not-found.module#PageNotFoundModule',
  },

]

export const routingModule = RouterModule.forRoot(
  appRoutes,
  { preloadingStrategy: PreloadAllModules }
);
