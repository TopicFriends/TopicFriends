import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  items: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase) {
    this.items = db.list('Event');
  }

  ngOnInit() {
  }

}
