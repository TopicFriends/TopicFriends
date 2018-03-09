import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module'
import {TopicsMapComponent} from './topics-map.component'
import {MapsSharedModule} from '../maps-shared/maps-shared.module'
import {MatSliderModule} from '@angular/material'
import {FormsModule} from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MapsSharedModule,
    MatSliderModule,
    FormsModule
  ],
  declarations: [
    TopicsMapComponent
  ],
  exports: [
    SharedModule,
    TopicsMapComponent,
  ]
})
export class TopicsMapSharedModule { }
