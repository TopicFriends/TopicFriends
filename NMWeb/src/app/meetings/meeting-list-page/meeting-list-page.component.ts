import { Component, OnInit } from '@angular/core';
import {Meeting, MeetingsService} from '../meetings-core/meetings.service'
import { MatSnackBar } from '@angular/material'
import { SnackBarComponent } from '../../shared/snackbar/snackbar.component'

@Component({
  selector: 'app-meeting-list-page',
  templateUrl: './meeting-list-page.component.html',
  styleUrls: ['./meeting-list-page.component.scss']
})
export class MeetingListPageComponent implements OnInit {

  allMeetings: Meeting[] = [];
  showAllMeetings = true;
  pastMeetings: Meeting[] = [];
  upcomingMeetings: Meeting[] = [];
  seePastMeetings = false;

  constructor(
    private meetingsService: MeetingsService,
    public snackBarComponent: SnackBarComponent
  ) {
    this.meetingsService.retrieveAllMeetings().subscribe((meetings: Meeting[]) => {
      this.allMeetings = meetings;
      this.pastMeetings = meetings.filter(meeting => this.meetingsService.isPastMeeting(meeting));
      this.upcomingMeetings = meetings.filter(meeting => this.meetingsService.isUpcomingMeeting(meeting));
    });

  }

  ngOnInit() {

  }

  onNewMeeting() {
    this.snackBarComponent.showSnackBar('Coming Soon!')
  }
}
