import { NgModule } from '@angular/core';
import {MatListModule, MatSlideToggleModule} from "@angular/material";

@NgModule({
  imports: [
    MatSlideToggleModule,
    MatListModule,
  ],
  exports: [
    MatSlideToggleModule,
    MatListModule,
  ],
})
export class CustomMaterialModule { }
