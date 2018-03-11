import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module'
import {AgmCoreModule} from '@agm/core'


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8eJ4NjIFWy0tABOEasmykdAj8e7aenL0',
      libraries: [
        "places",
        "geometry"
      ]
    }),
  ],
  declarations: [],
  exports: [
    SharedModule,
    AgmCoreModule,
  ]
})
export class MapsSharedModule { }
