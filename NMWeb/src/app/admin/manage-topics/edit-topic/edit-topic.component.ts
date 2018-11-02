import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {UserProfileInputs} from "../../../user-profile-details/UserProfileInputs";

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.scss']
})
export class EditTopicComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    shortName: new FormControl(''),
    website: new FormControl(''),
    parents: new FormControl(''),
    related: new FormControl(''),
  });

  // TODO: refactor app-topic-group-card to remove this
  userProfileInputs = new UserProfileInputs('', true, true);

  ngOnInit() {
    const defaultName = this.route.snapshot.queryParams['name'];
    console.log(defaultName);
    if(defaultName) {
      this.form.controls.name.patchValue(defaultName);
    }
  }

}
