import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.scss']
})
export class EditTopicComponent implements OnInit {

  constructor() { }

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    shortName: new FormControl(''),
  });

  ngOnInit() {

  }

}
