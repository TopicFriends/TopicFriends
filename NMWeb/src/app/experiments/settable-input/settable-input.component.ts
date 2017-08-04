import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-settable-input',
  templateUrl: './settable-input.component.html',
  styleUrls: ['./settable-input.component.scss']
})
export class SettableInputComponent implements OnInit {

  settableInputVar: string

  @Input() set settableInput(i: number) {
    this.settableInputVar = i.toFixed(2);
    console.log('settableInput set: ', i)
  }

  constructor() { }

  ngOnInit() {
    console.log('SettableInputComponent onInit: settableInputVar', this.settableInputVar)
  }

}
