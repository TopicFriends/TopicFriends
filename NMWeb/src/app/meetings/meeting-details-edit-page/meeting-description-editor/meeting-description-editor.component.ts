import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-meeting-description-editor',
  templateUrl: './meeting-description-editor.component.html',
  styleUrls: ['./meeting-description-editor.component.sass']
})
export class MeetingDescriptionEditorComponent implements OnInit {

  @Input() control = new FormControl()
  tinymceInit = {
    plugins: 'image imagetools paste autolink link codesample autoresize',
    toolbar: 'undo redo | formatselect | bold italic backcolor code ' +
      '| alignleft aligncenter alignright alignjustify ' +
      '| bullist numlist outdent indent | image codesample | removeformat ' +
      '| help',
    image_caption: true,
    paste_data_images: true,
    imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
    image_advtab: true,
    images_upload_url: true,
    images_upload_handler: function (blobInfo, success, failure) {
      success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
    },
  }

  constructor() { }

  ngOnInit() {
  }

}
