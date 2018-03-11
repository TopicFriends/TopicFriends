import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module'
import { AboutComponent } from './about.component'

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
  ],
  declarations: [
    AboutComponent,
  ]
})
export class AboutModule { }
