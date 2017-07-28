import { Injectable } from '@angular/core';

@Injectable()
export class MeetingAttendanceService {

  constructor() { }

  updateAttandance(value: boolean) {
    //send status to firebase
    console.log("Changing attendance to: " + value + "!")
  }
}
