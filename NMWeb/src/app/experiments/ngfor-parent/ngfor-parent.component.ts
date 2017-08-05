import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-parent',
  templateUrl: './ngfor-parent.component.html',
  styleUrls: ['./ngfor-parent.component.scss']
})
export class NgforParentComponent implements OnInit {

  count = 0;
  items = [];

  constructor() { }

  ngOnInit() {
  }


  click() {
    // this.items.push(9)
    ++ this.count
    const newItems = [];
    for (let i = 0; i < this.count; i ++) {
      newItems.push({someId: {id2: 'id'+i} })
    }
    this.items = newItems
  }


}
