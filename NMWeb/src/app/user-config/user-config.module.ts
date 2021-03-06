import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserConfigRoutingModule } from './user-config-routing.module';
import {UserConfigComponent} from "./user-config.component";
import {CustomMaterialModule} from "./custom-material.module";
import { UserConfigService } from '../shared/user-config.service';

@NgModule({
  imports: [
    CommonModule,
    UserConfigRoutingModule,
    CustomMaterialModule
  ],
  declarations: [
    UserConfigComponent
  ],
  providers: [UserConfigService]
})
export class UserConfigModule { }
