import { Component, OnInit } from '@angular/core';
import {DbList} from '../db.service';
import {Meeting, MeetingsService} from '../shared/meetings.service'

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {

  items: DbList<Meeting>;

  constructor(private meetingsService: MeetingsService) {
    this.items = this.meetingsService.retrieveAllMeetings();
  }

  ngOnInit() {
  }

}
