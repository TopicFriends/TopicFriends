import {Component, Input, OnInit} from '@angular/core';
import {TopicInterest} from 'app/user-profile/user-interests';
import {TagEntry} from '../../tag-entry'
import {MatDialog} from "@angular/material";
import {SkillLevelPopoverComponent} from "../skill-level-popover/skill-level-popover.component";

@Component({
  selector: 'app-user-skill',
  templateUrl: './user-skill.component.html',
  styleUrls: ['./user-skill.component.scss'],
})
export class UserSkillComponent implements OnInit {

  @Input() tag: TagEntry
  tag2: TopicInterest

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.tag2 = new TopicInterest(this.tag);
  }

  setValue() {
  }

  openDialog(e, topicInterest): void {
    let positionY = `${e.clientY}px`;
    let positionX = `${e.clientX}px`;

    let name = topicInterest.tagEntry.name;
    // var target = e.target || e.srcElement || e.currentTarget;
    // var idAttr = target.attributes.id;
    // var value = idAttr.nodeValue;

    let dialogRef = this.dialog.open(SkillLevelPopoverComponent, {
      position: {
        top: positionY,
        left: positionX,
      },
      data: {
        name: name
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was whatever', result);
    });
  }

}
