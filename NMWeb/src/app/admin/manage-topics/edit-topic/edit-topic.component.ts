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
  editTopic: TagEntry;

  // TODO: refactor app-topic-group-card to remove this
  userProfileInputs = new UserProfileInputs('', true, true);

  ngOnInit() {
    let controls;
    const defaultName = this.route.snapshot.queryParams['name'];
    const topicId = this.route.snapshot.params['topicId'];
    if(defaultName) {
      this.form.controls.name.patchValue(defaultName);
    }
    if(topicId) {
      const topic = this.topicsService.getTopicById(topicId);
      if(!topic) {
        this.snackBar.open(`Unknown topic id: ${topic.id}`, 'Close',
          {duration: 5000});
        this.router.navigate(['/admin/topics']);
      }
      this.editTopic = topic;
      controls = this.getControls(topic);
    } else {
      controls = this.getControls();
    }
    this.form = new FormGroup(controls);
  }

  private getControls(topic: TagEntry|{} = {}) {
    let topicUrls: TopicUrls|{} = topic['urls'] || {};
    let controls = {
      name: new FormControl(topic['name'] || ''),
      shortName: new FormControl(topic['shortName'] || ''),
      website: new FormControl(topic['website'] || ''),
      parents: new FormControl(topic['parents'] || ''),
      related: new FormControl(topic['related'] || ''),
    };
    this.urlTypes.forEach((urlType) => {
      controls[urlType.id] = new FormControl(topicUrls[urlType.id] || '');
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
      data['shortName'],
    );
    return Observable.create((observer) => {
      // Send new topic to server
      this.topicsService.addTopic(topic);
      observer.next(topic);
    });
  }

  updateSave(): Observable<TagEntry> {
    const data = this.form.value;
    this.editTopic.name = data['name'];
    this.editTopic.shortName = data['shortName'];
    this.editTopic.website = data['website'];
    this.editTopic.related = data['related'];
    this.urlTypes.forEach((urlType) => {
      this.editTopic.urls[urlType.id] = data[urlType.id];
    });
    return Observable.create((observer) => {
      // Send edited topic to server
      observer.next(this.editTopic);
    });
  }

  showSaveMessage(topic: TagEntry) {
    this.snackBar.open(`${topic.name} saved successfully`, 'Close', {
      duration: 2000,
    });
  }

  save(): void {
    let observable: Observable<TagEntry>;
    if(this.editTopic) {
      observable = this.updateSave();
    } else {
      observable = this.createSave();
    }
    observable.subscribe((topic) => {
      this.showSaveMessage(topic);
      this.router.navigate([`/admin/topics/${topic.id}/edit`]);
    });
  }

}
