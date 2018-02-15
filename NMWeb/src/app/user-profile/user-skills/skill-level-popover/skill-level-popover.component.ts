import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './skill-level-popover.component.html',
  styleUrls: ['./skill-level-popover.component.css']
})

export class SkillLevelPopoverComponent implements OnInit {

  public skillLevels:string[] = [
      "?",
      "none",
      "beginner",
      "intermediate",
      "advanced",
      "expert",
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
