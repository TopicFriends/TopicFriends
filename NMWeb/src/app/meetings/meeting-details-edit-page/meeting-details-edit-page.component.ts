import { Component, OnInit } from '@angular/core';
import {
  Meeting,
  MeetingsService,
} from '../meetings-core/meetings.service'
import { FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import {
  DbObject,
  DbService,
} from '../../shared/db.service'
import { MEETING_ID } from '../meetings-routing.module'
import "rxjs/add/operator/take"

export class MeetingFormControls {
  description = new FormControl()
  title = new FormControl()
  meetupLink = new FormControl()
  place = new FormControl()
  placeLink = new FormControl()
  date = new FormControl()
  maxAttendees = new FormControl()
}

@Component({
  selector: 'app-meeting-details-edit-page',
  templateUrl: './meeting-details-edit-page.component.html',
  styleUrls: ['./meeting-details-edit-page.component.sass']
})
export class MeetingDetailsEditPageComponent implements OnInit {

  controls = new MeetingFormControls()

  private readonly meetingId: string
  private readonly meeting: DbObject<Meeting>

  constructor(
    public meetingsService: MeetingsService,
    private activatedRoute: ActivatedRoute,
    private dbService: DbService,
  ) {
    this.meetingId = this.activatedRoute.snapshot.params[MEETING_ID];
    this.meeting = this.meetingsService.retrieveMeetingDetails(this.meetingId)
  }

  ngOnInit() {
    this.dbService.bindForm(
      this.meeting,
      this.controls,
    )
  }

}
