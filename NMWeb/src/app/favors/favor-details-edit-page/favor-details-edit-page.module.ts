import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavorDetailsEditPageRoutingModule } from './favor-details-edit-page-routing.module';
import { FavorDetailsEditPageComponent } from './favor-details-edit-page.component';
import { RichTextEditorModule } from '../../rich-text-editor/rich-text-editor.module'
import { MatButtonModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    FavorDetailsEditPageRoutingModule,
    RichTextEditorModule,
    MatButtonModule,
  ],
  declarations: [FavorDetailsEditPageComponent]
})
export class FavorDetailsEditPageModule { }
