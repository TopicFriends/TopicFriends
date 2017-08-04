import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdSlideToggleModule, MdIconModule, MaterialModule, MdButtonModule, MdCardModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {UserProfileService} from './user-profile/user-profile.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthService} from './user-profile/auth.service';
import {UserListService} from './user-list/user-list.service';
import {UserMatcherService} from './user-matcher.service';
import { HeaderComponent } from './core/header/header.component';
import { UserTemplateComponent } from './user-list/user-template/user-template.component';
import {EventsModule} from './event-list/events.module';

import {DbService} from './db.service'
import {DomainDbService} from './domain-db.service'
import {MeetingsService} from './shared/meetings.service'
import {TopicsService} from './shared/topics.service';
import {UserProfileModule} from './user-profile/user-profile.module'
import {CoreModule} from 'app/core/core.module';
import {SharedModule} from './shared/shared.module'

// import {
//   AngularFireModule,
//   AngularFire,
//   AuthMethods,
//   AuthProviders} from 'angularfire2';


// import 'hammerjs';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'people-list',
    component: UserListComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    UserTemplateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    EventsModule,
    UserProfileModule,
    RouterModule.forRoot(appRoutes),
    // AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MdButtonModule,
    MdCardModule,
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
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent],
})
export class AppModule { }
