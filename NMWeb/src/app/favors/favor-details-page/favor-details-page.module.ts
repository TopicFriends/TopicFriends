import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavorDetailsPageRoutingModule } from './favor-details-page-routing.module';
import { FavorDetailsPageComponent } from './favor-details-page.component';

@NgModule({
  imports: [
    CommonModule,
    FavorDetailsPageRoutingModule
  ],
  declarations: [FavorDetailsPageComponent]
})
export class FavorDetailsPageModule { }
