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

  constructor(private meetingsService: MeetingsService) {
    this.meetingsService.retrieveAllMeetings().subscribe((meetings: Meeting[]) => {
      let today = new Date();
      this.pastMeetings = meetings.filter((meeting) =>  {
        return !meeting.date || isNaN(new Date(meeting.date).getTime()) || new Date(meeting.date).getTime() < today.getTime();
      });

      this.upcommingMeetings = meetings.filter((meeting) =>  {
        return meeting.date && new Date(meeting.date).getTime() >= today.getTime();
      });
    });
  }

  ngOnInit() {
  }

}
