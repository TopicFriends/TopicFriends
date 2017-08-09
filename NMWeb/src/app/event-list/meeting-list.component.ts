import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {

  items: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase) {
    this.items = db.list('Meetings/Meeting');
  }

  ngOnInit() {
  }

}
