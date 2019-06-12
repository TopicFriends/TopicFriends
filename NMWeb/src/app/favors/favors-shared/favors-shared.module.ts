import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavorListItemComponent } from './favor-list-item/favor-list-item.component';
import {
  MatButtonModule,
  MatCardModule,
} from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    FavorListItemComponent,
  ],
  declarations: [FavorListItemComponent],
})
export class FavorsSharedModule { }
