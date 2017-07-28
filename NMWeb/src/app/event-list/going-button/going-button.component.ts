import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-going-button',
  templateUrl: './going-button.component.html',
  styleUrls: ['./going-button.component.scss']
})
export class GoingButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show: boolean = true;

  userAttendsMeeting(choice: boolean) {
    this.show = choice;
  }
}
