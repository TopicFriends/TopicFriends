import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module'
import {TopicsMapPageComponent} from './topics-map-page.component'
import {TopicsMapPageRoutingModule} from './topics-map-page-routing.module'
import {MapsSharedModule} from '../../maps/maps-shared/maps-shared.module'
import {TopicsMapSharedModule} from '../topics-map-shared/topics-map-shared.module'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TopicsMapSharedModule,
    TopicsMapPageRoutingModule,
    MapsSharedModule
  ],
  declarations: [
    TopicsMapPageComponent
  ],
  exports: [
    SharedModule,
    TopicsMapPageComponent
  ]
})
export class TopicsMapPageModule { }
