import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
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

  @Input() tag: TagEntry;
  tag2: TopicInterest;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.tag2 = new TopicInterest(this.tag);
  }

  setValue() {
  }

  openDialog(e, topicInterest): void {

    let positionX;
    let positionY;


    positionY = e.clientY;
    positionX = e.clientX;

    if(positionX+350 > window.innerWidth){
      positionX = e.clientX-300;
    }
    if( positionY+400 > window.innerHeight){
      positionY = e.clientY-400;
    }

    let name = topicInterest.tagEntry.name;
    // var target = e.target || e.srcElement || e.currentTarget;
    // var idAttr = target.attributes.id;
    // var value = idAttr.nodeValue;

    let dialogRef = this.dialog.open(SkillLevelPopoverComponent, {
      id: "skill-level-dialog",
      position: {
        top: `${positionY}px`,
        left: `${positionX}px`,
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
