import { Component, OnInit } from '@angular/core';
import { exampleFavors } from '../favors-core/favors-example'

@Component({
  selector: 'app-favors-list-page',
  templateUrl: './favors-list-page.component.html',
  styleUrls: ['./favors-list-page.component.sass']
})
export class FavorsListPageComponent implements OnInit {

  favors = exampleFavors

  constructor() { }

  ngOnInit() {
  }

}
