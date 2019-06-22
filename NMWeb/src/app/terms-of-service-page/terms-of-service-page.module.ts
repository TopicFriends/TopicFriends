import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsOfServicePageRoutingModule } from './terms-of-service-page-routing.module';
import { TermsOfServicePageComponent } from './terms-of-service-page.component'

@NgModule({
  imports: [
    CommonModule,
    TermsOfServicePageRoutingModule,
  ],
  declarations: [
    TermsOfServicePageComponent,
  ]
})
export class TermsOfServicePageModule { }
