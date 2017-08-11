import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database';
import {DbObject, DbService} from '../db.service';
import {Meeting} from '../shared/meetings.service';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {

  items: any;

  constructor(private db: DbService) {
    this.items = db.list('Meetings/Meeting');
  }

  ngOnInit() {
  }

}
