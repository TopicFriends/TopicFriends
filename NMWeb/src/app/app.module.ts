import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NgZone} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UserListPage } from './user-list-page/user-list.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatIcon, MatIconModule, MatListModule, MatNavList, MatRadioModule, MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatTableModule,
} from '@angular/material';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {UserProfileService} from './user-profile-shared/user-profile.service';
import {AuthService} from './user-profile-shared/auth.service';
import {UserListService} from './user-list-page/user-list.service';
import {UserMatcherService} from './user-profile-shared/user-matcher.service';
// import { UserTemplateComponent } from './user-list/user-template/user-template.component';
import {MeetingsModule} from './meeting-list/meetings.module';
import {MeetingsService} from './shared/meetings.service'
import {TopicsService} from './shared/topics.service';
import {UserProfileSharedModule} from './user-profile-shared/user-profile-shared.module'
import {CoreModule} from 'app/core/core.module';
import {SharedModule} from './shared/shared.module';
// import { UserInterestsModeViewComponent } from './user-list/user-template/user-interests-mode-view/user-interests-mode-view.component';
import { TopicsListComponent } from './topics-list/topics-list.component';
import {MapsModule} from './maps/maps.module'
import 'hammerjs';
import {FormsModule} from '@angular/forms';
import { UserGroupsComponent } from './user-groups/user-groups.component'
import {UserGroupService} from './shared/user-group.service'
import {CookieLawModule} from 'angular2-cookie-law';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component'
import {routingModule} from './app.routing'
import {TopicsMapPageModule} from './topics-map-page/topics-map-page.module'
import {MapsSharedModule} from './maps-shared/maps-shared.module'
import {AgmCoreModule} from '@agm/core'
import { LandingPageModule } from './landing-page/landing-page.module'


@NgModule({
  declarations: [
    AppComponent,
    // UserTemplateComponent,
    // UserInterestsModeViewComponent,
    TopicsListComponent,
    UserGroupsComponent,
    TermsOfServiceComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    routingModule,
    SharedModule,
    MeetingsModule,
    UserProfileSharedModule,
    MapsModule,
    MapsSharedModule,
    TopicsMapPageModule,
    LandingPageModule,
    // ----
    // AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AngularFireModule.initializeApp(environment.firebase) ,
    AngularFireDatabaseModule, /* maybe move to its own module: DbModule; e.g. LoginModule would not require full db (for lazy loading) */
    AngularFireAuthModule,
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    MatChipsModule,
    MatSliderModule,
    MatSelectModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    CookieLawModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8eJ4NjIFWy0tABOEasmykdAj8e7aenL0',
      libraries: [
        "places",
        "geometry"
      ]
    }),
    // FlexLayoutModule,
  ],
  providers: [
    AuthService,
    UserProfileService,
    UserListService,
    UserMatcherService,
    MeetingsService,
    TopicsService,
    UserGroupService
  ],
  schemas: [
    // CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [
    AppComponent,
    // provide(PLATFORM_DIRECTIVES, {useValue: [ROUTER_DIRECTIVES], multi: true}),
  ],
})
export class AppModule { }
