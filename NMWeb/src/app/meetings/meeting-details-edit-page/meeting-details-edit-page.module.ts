import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingDetailsEditPageRoutingModule } from './meeting-details-edit-page-routing.module';
import { MeetingDetailsEditPageComponent } from './meeting-details-edit-page.component';
import { MeetingDescriptionEditorComponent } from './meeting-description-editor/meeting-description-editor.component';
import { QuillModule } from 'ngx-quill'

@NgModule({
  imports: [
    CommonModule,
    MeetingDetailsEditPageRoutingModule,
    QuillModule,
  ],
  declarations: [
    MeetingDetailsEditPageComponent,
    MeetingDescriptionEditorComponent
  ]
})
export class MeetingDetailsEditPageModule { }
