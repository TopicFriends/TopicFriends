import { Injectable } from '@angular/core';

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

  constructor() { }
}
