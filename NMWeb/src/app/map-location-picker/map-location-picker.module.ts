import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapsSharedModule} from '../maps-shared/maps-shared.module'

@NgModule({
  imports: [
    CommonModule,
    MapsSharedModule,
  ],
  declarations: [],
  exports: []
})
export class MapLocationPickerModule { }
