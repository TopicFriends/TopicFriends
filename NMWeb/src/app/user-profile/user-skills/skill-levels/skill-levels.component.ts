import {Component, OnInit, Input } from '@angular/core';
import {MatButtonToggleGroup} from '@angular/material'

@Component({
  selector: 'app-skill-levels',
  templateUrl: './skill-levels.component.html',
  styleUrls: ['./skill-levels.component.scss']
})
export class SkillLevelsComponent implements OnInit {

  @Input() id:string;
  @Input() isVertical:boolean;
  @Input() levels:string[];
  @Input() header:string;
  public selectedValue:string;


  public skillsIcons = {
    none:"battery-empty",
    beginner:"battery-quarter",
    intermediate:"battery-half",
    advanced:"battery-three-quarters",
    expert:"battery-full"
  }

  constructor() { }

  ngOnInit() {
  }

}
