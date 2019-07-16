import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.sass']
})
export class RichTextEditorComponent implements OnInit {

  @Input() control = new FormControl()

  constructor() { }

  ngOnInit() {
  }

}
