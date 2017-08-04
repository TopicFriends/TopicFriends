import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-settable-input',
  templateUrl: './settable-input.component.html',
  styleUrls: ['./settable-input.component.scss']
})
export class SettableInputComponent implements OnInit {

  // settableInputVar: string
  complexObject

  @Input() set settableInput(i: any) {
    // this.settableInputVar = i.value1.value2.toFixed(2);
    this.complexObject = { value1: {value2: i}}
    console.log('settableInput set: ', i)
  }

  constructor() { }

  ngOnInit() {
    console.log('SettableInputComponent onInit: settableInputVar', this.complexObject)
  }

}
