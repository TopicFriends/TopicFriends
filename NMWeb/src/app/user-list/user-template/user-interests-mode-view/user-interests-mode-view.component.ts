import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-interests-mode-view',
  templateUrl: './user-interests-mode-view.component.html',
  styleUrls: ['./user-interests-mode-view.component.scss']
})
export class UserInterestsModeViewComponent implements OnInit {

  @Input() topicGroup;

  constructor() { }

  ngOnInit() {
  }

}
