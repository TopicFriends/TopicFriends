import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basic-actions-button-group',
  templateUrl: './basic-actions-button-group.component.html',
  styleUrls: ['./basic-actions-button-group.component.scss']
})
export class BasicActionsButtonGroupComponent implements OnInit {

  @Input() public actions:string[];

  constructor() { }

  ngOnInit() {
  }

}
