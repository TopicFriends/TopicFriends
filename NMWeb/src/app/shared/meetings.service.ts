import { Injectable } from '@angular/core';
import {DbService} from '../db.service';

 export class Meeting {
  $key: string; // note: $key might be more handy in Firebase
  title: string;
  description: string;
  date: Date;
  place: string;
  meetupLink: string;
 }

@Injectable()
export class MeetingsService {

  constructor(private db: DbService) { }

  retrieveMeetingDetails(meetingId: string): Meeting {
    let meetingDetails;
    this.db.objectByPath('Meetings/Meeting/' + meetingId).subscribe((meeting: Meeting) => {
      meetingDetails = meeting;
      console.log('retrieveMeetingDetails: ', meeting)
    });
    return meetingDetails;
  }
}
