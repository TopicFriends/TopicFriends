import { Injectable } from '@angular/core';
import {DbList, DbObject, DbService} from './db.service';

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
  MEETINGS_PATH = 'Meetings/Meeting/';

  constructor(private db: DbService) { }

  retrieveMeetingDetails(meetingId: string): DbObject<Meeting> {
    return this.db.objectByPath(this.MEETINGS_PATH + meetingId);
  }

  retrieveAllMeetings(): DbList<Meeting> {
    return this.db.list(this.MEETINGS_PATH);
  }
}
