import { Component, OnInit } from '@angular/core';
import {Meeting, MeetingsService} from '../shared/meetings.service'

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {

  pastMeetings: Meeting[];
  upcommingMeetings: Meeting[];
  seePastMeetings = false;

  constructor(private meetingsService: MeetingsService) {
    this.meetingsService.retrieveAllMeetings().subscribe((meetings: Meeting[]) => {
      this.pastMeetings = meetings.filter(meeting => this.meetingsService.isPastMeeting(meeting));
      this.upcommingMeetings = meetings.filter(meeting => this.meetingsService.isUpcommingMeeting(meeting));
    });
  }

  ngOnInit() {

  }
}
