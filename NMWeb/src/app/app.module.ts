import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { EventListComponent } from './event-list/event-list.component';
import {MdButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdSlideToggleModule} from '@angular/material';
import { MdIconModule,  } from '@angular/material';


// import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserListComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdSlideToggleModule,
    MdIconModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
