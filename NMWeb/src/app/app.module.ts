import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NgZone} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatChipsModule, MatRadioModule, MatSelectModule, MatSliderModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {UserProfileService} from './user-profile/user-profile.service';
import {AuthService} from './user-profile/auth.service';
import {UserListService} from './user-list/user-list.service';
import {UserMatcherService} from './user-matcher.service';
// import { UserTemplateComponent } from './user-list/user-template/user-template.component';
import {MeetingsModule} from './meeting-list/meetings.module';
import {DbService} from './db.service'
import {DomainDbService} from './domain-db.service'
import {MeetingsService} from './shared/meetings.service'
import {TopicsService} from './shared/topics.service';
import {UserProfileModule} from './user-profile/user-profile.module'
import {CoreModule} from 'app/core/core.module';
import {SharedModule} from './shared/shared.module';
// import { UserInterestsModeViewComponent } from './user-list/user-template/user-interests-mode-view/user-interests-mode-view.component';
import { TopicsListComponent } from './topics-list/topics-list.component';
import {MapsModule} from './maps/maps.module'
import { AboutComponent } from './about/about.component';

// import {
//   AngularFireModule,
//   AngularFire,
//   AuthMethods,
//   AuthProviders} from 'angularfire2';


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


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    // UserTemplateComponent,
    // UserInterestsModeViewComponent,
    TopicsListComponent,
    AboutComponent,
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
    UserProfileModule,
    MapsModule,
    MapsSharedModule,
    TopicsMapPageModule,
    // ----
    // AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    MatChipsModule,
    MatSliderModule,
    MatSelectModule,
    FormsModule,
    CookieLawModule,
    // FlexLayoutModule,
  ],
  providers: [
    AuthService,
    DbService,
    DomainDbService,
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
