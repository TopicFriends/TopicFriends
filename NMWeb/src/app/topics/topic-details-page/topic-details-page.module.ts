import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module'
import { TopicDetailsComponent } from './topic-details.component'
import { MatChipsModule } from '@angular/material'
import { TopicsDetailsService } from './topics-details.service';
import { TopicsMapSharedModule } from '../topics-map-shared/topics-map-shared.module'
import {TopicDetailsRoutingModule} from "./topic-details-routing.module";
import { UserProfileSharedModule } from '../../user-profile/user-profile-shared/user-profile-shared.module'
import { TopicsSharedModule } from '../topics-shared/topics-shared.module'


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TopicDetailsRoutingModule,
    MatChipsModule,
    TopicsMapSharedModule,
    UserProfileSharedModule,
    TopicsSharedModule,
  ],
  declarations: [
    TopicDetailsComponent,
  ],
  providers: [
    TopicsDetailsService
  ]
})
export class TopicDetailsPageModule { }
