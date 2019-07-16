import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavorsListPageRoutingModule } from './favors-list-page-routing.module';
import { FavorsListPageComponent } from './favors-list-page.component';
import { FavorsSharedModule } from '../favors-shared/favors-shared.module'

@NgModule({
  imports: [
    CommonModule,
    FavorsListPageRoutingModule,
    FavorsSharedModule,
  ],
  declarations: [FavorsListPageComponent]
})
export class FavorsListPageModule { }
