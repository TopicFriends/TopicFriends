import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {TopicInterest} from 'app/user-profile/user-interests';
import {TagEntry} from '../../tag-entry';
import {MatDialog} from "@angular/material";
import {SkillLevelPopoverComponent} from "../../user-interest-configuration-dialog/skill-level-popover/skill-level-popover.component";
import {UserInterestConfigurationDialogComponent} from "../../user-interest-configuration-dialog/user-interest-configuration-dialog.component";
import {UserSkillLevelsHaveWant} from '../../../shared/user-skills.service'
import {UserProfileInputs} from '../../user-profile.component'

@Component({
  selector: 'app-user-skill',
  templateUrl: './user-skill.component.html',
  styleUrls: ['./user-skill.component.scss'],
})
export class UserSkillComponent implements OnInit {

  @Input() tag: TagEntry;
  tag2: TopicInterest;
  public showInterestDialog = false;
  @Input() userProfileInputs: UserProfileInputs

  @Output() levelsChanged = new EventEmitter<UserSkillLevelsHaveWant>()

  @Input() skillLevels: UserSkillLevelsHaveWant

  public dialogSize = {
    width: 360,
    height: 400
  }

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.tag2 = new TopicInterest(this.tag);
    if ( this.skillLevels ) {
      // console.log('UserSkillComponent, skillLevels', this.skillLevels)
    }
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
      maxWidth: `${this.dialogSize.width}px`,
      position: {
        top: `${positionY}px`,
        left: `${positionX}px`,
        bottom:''
      },
      data: {
        name: name,
        tag2: this.tag2,
        userProfileInputs: this.userProfileInputs,
        skillLevels:this.skillLevels
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
    let dialogRef;
    if (this.showInterestDialog){
      dialogRef = this.dialog.open(UserInterestConfigurationDialogComponent, dialogConfig);
    } else {
      dialogRef = this.dialog.open(SkillLevelPopoverComponent, dialogConfig);
    }

    /// Catch Event of changes in Skills Levels Dialog
    dialogRef.componentInstance.levelsChanged.subscribe((skillsChange)=>{
      this.levelsChanged.emit(skillsChange);
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('skills popup afterClosed', result);
      this.levelsChanged.emit(result)
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
