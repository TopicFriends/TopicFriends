import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-sets-input',
  templateUrl: './parent-sets-input.component.html',
  styleUrls: ['./parent-sets-input.component.scss']
})
export class ParentSetsInputComponent implements OnInit {

  input = 10

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.input++
  }

}
