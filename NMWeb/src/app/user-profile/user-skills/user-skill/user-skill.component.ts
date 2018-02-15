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

  public dialogSize = {
    width: 300,
    height: 400
  }



  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.tag2 = new TopicInterest(this.tag);
  }

  setValue() {
  }

  openDialog(e, topicInterest): void {

    let positionY = e.clientY;
    let positionX = e.clientX;

    let mobileMaxWidth:number = 600;

    let name = topicInterest.tagEntry.name;

    let dialogConfig = {
      id: "skill-level-dialog",
      width: `${this.dialogSize.width}`,
      height: `${this.dialogSize.height}`,
      position: {
        top: `${positionY}px`,
        left: `${positionX}px`,
      },
      data: {
        name: name
      }
    }

    if ( window.innerWidth < mobileMaxWidth ){
      delete dialogConfig.position;
    } else {
      if( positionX + this.dialogSize.width > window.innerWidth ){
       positionX -= this.dialogSize.width;
       dialogConfig.position.left = `${positionX}px`;
      }
      if( positionY + this.dialogSize.height > window.innerHeight ){
        positionY -= this.dialogSize.height;
        dialogConfig.position.top = `${positionY}px`;
      }
    }

    let dialogRef = this.dialog.open(SkillLevelPopoverComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was whatever', result);
    });
  }

}
