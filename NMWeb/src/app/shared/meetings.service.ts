import { Injectable } from '@angular/core';

export class Meeting {
  $key: string; // note: $key might be more handy in Firebase
  title: string;
  details: string;
}
/*
 export class Meeting {
 id: string;
 title: string;
 details: string;
 // date: Date;
 // place: string;
 }
 */

@Injectable()
export class MeetingsService {

  constructor() { }


}
