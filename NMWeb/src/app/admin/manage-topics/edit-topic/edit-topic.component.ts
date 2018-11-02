import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserProfileInputs} from "../../../user-profile-details/UserProfileInputs";
import {TopicsService} from "../../../shared/topics.service";
import {TagEntry, TopicUrls} from "../../../topics-shared/tag-entry";
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrls: ['./edit-topic.component.scss']
})
export class EditTopicComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public topicsService: TopicsService,
    public snackBar: MatSnackBar
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

  createSave(): Observable<TagEntry> {
    const data = this.form.value;
    const topic = new TagEntry(
      data['name'],'', data['website'], data['related'],
      new TopicUrls('', '', '', '', '', ''),
      data['parents'],
    );
    return Observable.create((observer) => {
      // Send topic to server
      this.topicsService.addTopic(topic);
      observer.next(topic);
    });
  }

  updateSave() {

  }

  showSaveMessage(topic: TagEntry) {
    this.snackBar.open(`${topic.name} saved successfully`, 'Close', {
      duration: 2000,
    });
  }

  save(): void {
    this.createSave().subscribe((topic) => {
      this.showSaveMessage(topic);
      this.router.navigate([`/admin/topics/${topic.id}/edit`]);
    });
  }

}
