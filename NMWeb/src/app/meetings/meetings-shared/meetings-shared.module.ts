import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoingButtonComponent } from './going-button/going-button.component'
import {
  MatButtonModule,
  MatProgressSpinnerModule,
} from '@angular/material'

const exportComponents = [
  GoingButtonComponent,
]

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  declarations: [
    ...exportComponents,
  ],
  exports: exportComponents,
})
export class MeetingsSharedModule { }
