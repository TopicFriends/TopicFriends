import { Component, OnInit } from '@angular/core';
import {Meeting, MeetingsService} from '../shared/meetings.service'

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit {

  allMeetings: Meeting[] = [];
  showAllMeetings = true;
  pastMeetings: Meeting[] = [];
  upcomingMeetings: Meeting[] = [];
  seePastMeetings = false;

  constructor(private meetingsService: MeetingsService) {
    this.meetingsService.retrieveAllMeetings().subscribe((meetings: Meeting[]) => {
      this.allMeetings = meetings;
      this.pastMeetings = meetings.filter(meeting => this.meetingsService.isPastMeeting(meeting));
      this.upcomingMeetings = meetings.filter(meeting => this.meetingsService.isUpcomingMeeting(meeting));
    });

  }

  ngOnInit() {

  }
}
