import {Component, Input, OnInit} from '@angular/core';
import {Meeting} from '../../shared/meetings.service';

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.scss']
})
export class MeetingDetailsComponent implements OnInit {

  constructor() { }

  meeting: Meeting;

  ngOnInit() {
  }

}
