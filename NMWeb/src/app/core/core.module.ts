import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component'
import {HeaderComponent} from './header/header.component'
import {MatIconModule, MatToolbar, MatToolbarModule} from '@angular/material'
import {FlexLayoutModule} from '@angular/flex-layout'
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {SharedModule} from '../shared/shared.module'
import {UserProfileModule} from '../user-profile/user-profile.module'
import {MeetingsModule} from '../meeting-list/meetings.module'
import {TopicsModule} from '../topics/topics.module'
import {CapitalizeFirstPipe} from "../shared/pipes/capitalize-first.pipe";
import {CleanUrlPipe} from "../shared/pipes/clean-url.pipe";
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    UserProfileModule,
    MeetingsModule,
    TopicsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FlexLayoutModule,
    FooterComponent
  ],
  providers: [
    CleanUrlPipe,
    CapitalizeFirstPipe
  ]
})
export class CoreModule {

}
