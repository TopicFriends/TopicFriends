import { Component, OnInit } from '@angular/core';
import {
  Meeting,
  MeetingsService,
} from '../meetings-core/meetings.service'
import { FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { DbObject } from '../../shared/db.service'
import { MEETING_ID } from '../meetings-routing.module'
import "rxjs/add/operator/take"

@Component({
  selector: 'app-meeting-details-edit-page',
  templateUrl: './meeting-details-edit-page.component.html',
  styleUrls: ['./meeting-details-edit-page.component.sass']
})
export class MeetingDetailsEditPageComponent implements OnInit {

  descriptionFormControl = new FormControl()
  titleFormControl = new FormControl()
  private readonly meetingId: string
  private meeting: DbObject<Meeting>

  constructor(
    public meetingsService: MeetingsService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.meetingId = this.activatedRoute.snapshot.params[MEETING_ID];
    this.meeting = this.meetingsService.retrieveMeetingDetails(this.meetingId)
  }

  ngOnInit() {
    this.meeting.take(1).subscribe(meetingFromFirebase => {
      this.descriptionFormControl.setValue(meetingFromFirebase && meetingFromFirebase.description)
      this.titleFormControl.setValue(meetingFromFirebase && meetingFromFirebase.title)
    })
    this.descriptionFormControl.valueChanges.subscribe(descriptionVal => {
      this.meeting.update({
        description: descriptionVal
      })
    })
    this.titleFormControl.valueChanges.subscribe(titleVal => {
      this.meeting.update({
        title: titleVal
      })
    })
  }

}
