import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapsSharedModule} from '../maps-shared/maps-shared.module'

@NgModule({
  imports: [
    CommonModule,
    MapsSharedModule,
  ],
  declarations: []
})
export class MapLocationPickerModule { }
