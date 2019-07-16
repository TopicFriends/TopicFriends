import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyPolicyPageRoutingModule } from './privacy-policy-page-routing.module';
import { MatTableModule } from '@angular/material'
import { PrivacyPolicyPageComponent } from './privacy-policy-page.component'

@NgModule({
  imports: [
    CommonModule,
    PrivacyPolicyPageRoutingModule,
    MatTableModule,
  ],
  declarations: [
    PrivacyPolicyPageComponent,
  ]
})
export class PrivacyPolicyPageModule { }
