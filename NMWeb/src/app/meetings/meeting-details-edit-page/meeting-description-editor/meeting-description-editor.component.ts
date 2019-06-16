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

  constructor() { }

  ngOnInit() {
  }

}
