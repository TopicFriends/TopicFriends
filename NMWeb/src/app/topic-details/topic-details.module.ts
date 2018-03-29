import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { TopicDetailsComponent } from './topic-details.component'
import { MatChipsModule } from '@angular/material'
import { TopicsDetailsService } from './topics-details.service';
import { TopicsMapSharedModule } from '../topics-map-shared/topics-map-shared.module'
import {TopicDetailsRoutingModule} from "./topic-details-routing.module";


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TopicDetailsRoutingModule,
    MatChipsModule,
    TopicsMapSharedModule,
  ],
  declarations: [
    TopicDetailsComponent,
  ],
  providers: [
    TopicsDetailsService
  ]
})
export class TopicDetailsModule { }
