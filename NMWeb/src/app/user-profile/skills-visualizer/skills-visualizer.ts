/**
 * Created by Pablo on 23/04/2017.
 */


import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'skills-visualizer',
  templateUrl: 'skills-visualizer.html'
})
export class SkillsVisualizer {

  //private _skills:Array<string>;
  @Input() skills:Array<string>= ['Angular', 'OtherSKill'];
  @Output() skillsChange  = new EventEmitter<Array<string>>();
  @Input() private editable: boolean = true;
  @Input() private theme:string = 'DARK'; // LIGHT - DARK

  constructor() {
  }

  removeSkill(i):void{
    this.skills.splice(i,1);
    this.skillsChange.emit(this.skills);
  }



}
