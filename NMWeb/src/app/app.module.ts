import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { LoginComponent } from './login/login.component';

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
    path: 'event-list',
    component: EventListComponent
  },
  {
    path: 'event-details',
    component: EventDetailsComponent
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
    EventListComponent,
    EventDetailsComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
