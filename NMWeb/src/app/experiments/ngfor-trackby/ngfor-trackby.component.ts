import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ngfor-trackby',
  templateUrl: './ngfor-trackby.component.html',
  styleUrls: ['./ngfor-trackby.component.scss']
})
export class NgforTrackbyComponent implements OnInit {



  @Input() set input(v) {
    this.items = v;
  }

  items = []

  constructor() { }

  ngOnInit() {
  }

  trackFn(index, val) {
    console.log('trackFn', val)
    return val.someId.id2
  }



}
