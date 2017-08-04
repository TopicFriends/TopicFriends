import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import {MdButtonModule, MdCheckboxModule, MdInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSlideToggleModule, MdIconModule, MaterialModule } from '@angular/material';
import {MdMenuModule} from '@angular/material';
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

import { NavbarComponent } from './core/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ItemListInputComponent } from './user-profile/item-list-input/item-list-input.component';
import { TestReusableComponent } from './user-profile/test-reusable/test-reusable.component';
import { SkillsVisualizerTestComponent } from './user-profile/skills-visualizer-test/skills-visualizer-test.component';
import {SkillsVisualizer} from './user-profile/skills-visualizer/skills-visualizer';
import { WhatUserWantsFormComponent } from './user-profile/what-user-wants-form/what-user-wants-form.component';
import {DbService} from './db.service'
import {DomainDbService} from './domain-db.service'
import {MeetingsService} from './shared/meetings.service'
import {TopicsService} from './shared/topics.service';
import { TopicTagComponent } from './topic-tag/topic-tag.component';
import { TopicTagListComponent } from './topic-tag-list/topic-tag-list.component';
import { SettableInputComponent } from './experiments/settable-input/settable-input.component';
import { ParentSetsInputComponent } from './experiments/parent-sets-input/parent-sets-input.component';
import { UserOtherProfilesComponent } from './user-profile/user-other-profiles/user-other-profiles.component'
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
    path: 'profile',
    component: UserProfileComponent,
  },
  {
    path: 'skills-test',
    component: SkillsVisualizerTestComponent,
  },
  {
    path: 'settableInput',
    component: ParentSetsInputComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserListComponent,
    LoginComponent,
    HeaderComponent,
    UserTemplateComponent,
    NavbarComponent,
    ItemListInputComponent,
    TestReusableComponent,
    SkillsVisualizer,
    SkillsVisualizerTestComponent,
    WhatUserWantsFormComponent,
    TopicTagComponent,
    TopicTagListComponent,
    SettableInputComponent,
    ParentSetsInputComponent,
    UserOtherProfilesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdSlideToggleModule,
    MdInputModule,
    MdMenuModule,
    MdCheckboxModule,
    MdIconModule,
    CoreModule,
    SharedModule,
    EventsModule,
    UserProfileModule,
    RouterModule.forRoot(appRoutes),
    // AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
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
