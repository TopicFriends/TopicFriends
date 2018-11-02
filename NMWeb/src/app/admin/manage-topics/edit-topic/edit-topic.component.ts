import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserProfileInputs} from "../../../user-profile-details/UserProfileInputs";
import {TopicsService} from "../../../shared/topics.service";
import {TagEntry, TopicUrls} from "../../../topics-shared/tag-entry";
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material";

type urlType = {id: string, name: string, icon?: string};
const URL_TYPES: urlType[] = [
  {id: 'wikipedia', name: 'Wikipedia'},
  {id: 'gitHub', icon: 'ion-social-github', name: 'GitHub'},
  {id: 'npm', name: 'Npm'},
  {id: 'stackOverFlow', name: 'StackOverFlow'},
  {id: 'stackShare', name: 'StackShare'},
  {id: 'twitter', icon: 'ion-social-twitter', name: 'Twitter'},
];


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
    public snackBar: MatSnackBar,
  ) { }

  form: FormGroup;
  urlTypes: urlType[] = URL_TYPES;

  // TODO: refactor app-topic-group-card to remove this
  userProfileInputs = new UserProfileInputs('', true, true);

  ngOnInit() {
    this.form = new FormGroup(this.getControls());
    const defaultName = this.route.snapshot.queryParams['name'];
    if(defaultName) {
      this.form.controls.name.patchValue(defaultName);
    }
  }

  private getControls() {
    let controls = {
      name: new FormControl(''),
      shortName: new FormControl(''),
      website: new FormControl(''),
      parents: new FormControl(''),
      related: new FormControl(''),
    };
    this.urlTypes.forEach((urlType) => {
      controls[urlType.id] = new FormControl('');
    });
    return controls;
  }

  createSave(): Observable<TagEntry> {
    const data = this.form.value;
    const topic = new TagEntry(
      data['name'],
      '',
      data['website'],
      data['related'],
      new TopicUrls(
        data['github'],
        data['wikipedia'],
        data['npm'],
        data['stackOverFlow'],
        data['stackShare'],
        data['twitter']
      ),
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
