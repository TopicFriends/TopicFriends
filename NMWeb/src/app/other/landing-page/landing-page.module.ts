import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { SharedModule } from '../../shared/shared.module'
import { TopicsSharedModule } from '../../topics/topics-shared/topics-shared.module'
import { TopicsEditSharedModule } from '../../topics/topics-edit-shared/topics-edit-shared.module'

@NgModule({
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule,
    TopicsSharedModule,
    TopicsEditSharedModule,
  ],
  declarations: [LandingPageComponent]
})
export class LandingPageModule { }
