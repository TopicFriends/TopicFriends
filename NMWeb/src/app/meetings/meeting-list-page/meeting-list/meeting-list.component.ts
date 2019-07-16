import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Meeting } from '../../meetings-core/meetings.service'

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.sass']
})
export class MeetingListComponent implements OnInit {

  @Input()
  meetingsList: Meeting[] = [];

  constructor() { }

  ngOnInit() {
  }

}
