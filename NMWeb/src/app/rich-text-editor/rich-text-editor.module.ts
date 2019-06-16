import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { QuillModule } from 'ngx-quill'
import { ReactiveFormsModule } from '@angular/forms';
import { TinymceEditorComponent } from './tinymce-editor/tinymce-editor.component'
import { EditorModule } from '@tinymce/tinymce-angular'
import { MatSlideToggleModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    QuillModule,
    ReactiveFormsModule,
    EditorModule,
    MatSlideToggleModule,
  ],
  exports: [
    RichTextEditorComponent,
  ],
  declarations: [
    RichTextEditorComponent,
    TinymceEditorComponent,
  ],
})
export class RichTextEditorModule { }
