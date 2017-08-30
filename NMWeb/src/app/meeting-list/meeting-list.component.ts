import { Component, OnInit } from '@angular/core';
import {DbService} from '../db.service';
import {MeetingsService} from '../shared/meetings.service'

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {

  items: any;

  constructor(private meetingsService: MeetingsService) {
    this.items = this.meetingsService.retrieveAllMeetings();
  }

  ngOnInit() {
  }

}
