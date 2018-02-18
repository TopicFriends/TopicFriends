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
    width: 360,
    height: 400
  }



  constructor(
    public dialog: MatDialog,
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
      // id: "skill-level-dialog",
      width: `${this.dialogSize.width}`,
      height: `${this.dialogSize.height}`,
      maxWidth: '100vw',
      position: {
        top: `${positionY}px`,
        left: `${positionX}px`,
        bottom:''
      },
      data: {
        name: name
      }
    }

    if ( window.innerWidth < mobileMaxWidth ){
      delete dialogConfig.position;
    } else {
      if( positionX + this.dialogSize.width > window.innerWidth ){
        this.repositionXCoordinate(positionX, dialogConfig, name);
      }
      if( positionY + this.dialogSize.height > window.innerHeight ){
        this.repositionYCoordinate(dialogConfig, name);
      }
    }

    let dialogRef = this.dialog.open(SkillLevelPopoverComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      // Save selected data
    });
  }

  private repositionYCoordinate(dialogConfig, name: string) {
    delete dialogConfig.position.top;
    dialogConfig.position.bottom = "0px";
    console.log("Repositioning dialog when it is outside of the window - height", name);
  }

  private repositionXCoordinate(positionX: number, dialogConfig, name: string) {
    positionX -= this.dialogSize.width;
    dialogConfig.position.left = `${positionX}px`;
    console.log("Repositioning dialog when it is outside of the window - width", name);
  }
}
