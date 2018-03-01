import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserConfigRoutingModule } from './user-config-routing.module';
import {UserConfigComponent} from "./user-config.component";
import {CustomMaterialModule} from "./custom-material.module";

@NgModule({
  imports: [
    CommonModule,
    UserConfigRoutingModule,
    CustomMaterialModule
  ],
  declarations: [
    UserConfigComponent
  ]
})
export class UserConfigModule { }
