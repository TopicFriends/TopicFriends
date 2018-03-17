import { Component, OnInit, Input } from '@angular/core';

/** FIXME: move to topics-shared module */
@Component({
  selector: 'app-topic-logo',
  templateUrl: './topic-logo.component.html',
  styleUrls: ['./topic-logo.component.scss']
})
export class TopicLogoComponent implements OnInit {

  @Input() public url;
  @Input() public width = 18;
  @Input() public height = 18;
  @Input() public margin = 5;

  public styles;

  constructor() { }

  ngOnInit() {
    this.styles = {
      'width.px': this.width,
      'height.px': this.height,
      'margin-right.px': this.margin,
      'vertical-align':'middle'
    }
  }

}
