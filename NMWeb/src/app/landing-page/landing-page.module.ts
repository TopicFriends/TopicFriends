import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule,
  ],
  declarations: [LandingPageComponent]
})
export class LandingPageModule { }
