import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component'
import {HeaderComponent} from './header/header.component'
import {MdIconModule, MdToolbar, MdToolbarModule} from '@angular/material'
import {FlexLayoutModule} from '@angular/flex-layout'
import {MdButtonModule, MdCheckboxModule, MdInputModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {SharedModule} from '../shared/shared.module'
import {UserProfileModule} from '../user-profile/user-profile.module'
import {MeetingsModule} from '../meeting-list/meetings.module'
import {TopicsModule} from '../topics/topics.module'


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    UserProfileModule,
    MeetingsModule,
    TopicsModule,
    MdIconModule,
    MdMenuModule,
    MdButtonModule,
    MdToolbarModule,
  ],
  declarations: [
    NavbarComponent,
    HeaderComponent,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FlexLayoutModule,
  ],
})
export class CoreModule {

}
