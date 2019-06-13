import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { QuillModule } from 'ngx-quill'

@NgModule({
  imports: [
    CommonModule,
    QuillModule,
  ],
  exports: [
    RichTextEditorComponent,
  ],
  declarations: [
    RichTextEditorComponent,
  ],
})
export class RichTextEditorModule { }
