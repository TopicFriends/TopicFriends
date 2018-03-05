import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module'
import {TopicsMapComponent} from './topics-map.component'
import {MapsSharedModule} from '../maps-shared/maps-shared.module'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MapsSharedModule
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
