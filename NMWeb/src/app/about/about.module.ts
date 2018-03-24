import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module'
import { AboutComponent } from './about.component'
import { TopicsSharedModule } from '../topics-shared/topics-shared.module'
import { MatChipsModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    TopicsSharedModule,
    MatChipsModule /* later will have a dedicated topics-list-inline component instead of relying on mat chips */,
  ],
  declarations: [
    AboutComponent,
  ]
})
export class AboutModule { }
