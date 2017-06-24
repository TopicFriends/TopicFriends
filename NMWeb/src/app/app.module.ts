import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { MdButtonModule, MdSlideToggleModule, MdIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {UserProfileService} from './user-profile.service';
import {FormsModule} from '@angular/forms';
import {AuthService} from './user-profile/auth.service';
import {UserListService} from './user-list.service';
import { EventsModule } from './event-list/events.module';

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
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'people-list',
    component: UserListComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserListComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdSlideToggleModule,
    MdIconModule,
    EventsModule,
    RouterModule.forRoot(appRoutes),
    // AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [AuthService, UserProfileService, UserListService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
