import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [],
  exports: [
    SharedModule
  ]
})
export class TopicsListModule { }
