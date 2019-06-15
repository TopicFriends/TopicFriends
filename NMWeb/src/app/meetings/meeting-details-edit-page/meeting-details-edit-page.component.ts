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
import { ApfFormControl } from '../../util/formUtils/ApfFormControl'
import { FormDef } from '../../util/formUtils/formUtils'


export class MeetingFormControls implements FormDef<Meeting> {
  description = new ApfFormControl<string>()
  title = new ApfFormControl<string>()
  meetupLink = new ApfFormControl<string>()
  place = new ApfFormControl<string>()
  placeLink = new ApfFormControl<string>()
  date = new ApfFormControl<string>()
  maxAttendees = new ApfFormControl<number>()
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

  stringKBytesCount(stringVal: string) {
    if ( ! stringVal ) {
      return 0
    }
    return Math.round(stringVal.length / 1024)
  }
}
