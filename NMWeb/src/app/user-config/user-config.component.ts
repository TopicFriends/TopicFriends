import { Component, OnInit } from '@angular/core';
import {ExperimentalFeature} from "./experimental-feature";

@Component({
  selector: 'app-user-config',
  templateUrl: './user-config.component.html',
  styleUrls: ['./user-config.component.scss']
})

export class UserConfigComponent implements OnInit {

  public loading:string;

  public features:ExperimentalFeature[] = [
    {
      name:"show-interest-dialog",
      label: "Show Interest on Topic as a PopUp",
      description: "Let you change the profile view from scrolling to popover"
    },
    {
      name:"show-skills",
      label: "Show Skill Levels section in user profile",
      description: "Define your skill levels (have, want) for given topics"
    }
  ];

  public userConfig;

  constructor() {
    this.userConfig = JSON.parse(localStorage.getItem('userConfig')) || {};
    console.log(this.userConfig);
  }

  ngOnInit(){
  }

  featureChange(name){
    this.userConfig[name] = (this.userConfig[name]) ? false : true;
    localStorage.setItem('userConfig', JSON.stringify(this.userConfig));
  }
}
