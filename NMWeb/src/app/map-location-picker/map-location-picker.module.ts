import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapsSharedModule} from '../maps-shared/maps-shared.module'
import {DialogModule} from 'primeng/dialog'
import {UserPickLocationComponent} from './user-pick-location/user-pick-location.component'

@NgModule({
  imports: [
    CommonModule,
    MapsSharedModule,
  ],
  declarations: [],
})
export class MapLocationPickerModule { }
