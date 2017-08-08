import {Component, Input, OnInit, Output} from '@angular/core';
import {MeetingAttendanceService} from '../meeting-attendance.service';
import {Meeting} from '../../shared/meetings.service';
import {AuthService} from '../../user-profile/auth.service';

@Component({
  selector: 'app-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.scss']
})
export class EventListItemComponent implements OnInit {

  @Input() event: Meeting;
  /*@Output()*/ goingStatus: boolean;

  constructor(
    private meetingAttendanceService: MeetingAttendanceService,
    private authService: AuthService,
    ) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.meetingAttendanceService.retrieveUserCurrentAttendanceStatus(this.event.$key)
        .subscribe(status => {
          this.goingStatus = status.going;
          console.log('EventListItemComponent, status.goingStatus: ' + status.going)
        });
    })
    console.log('event', this.event)
  }
}
