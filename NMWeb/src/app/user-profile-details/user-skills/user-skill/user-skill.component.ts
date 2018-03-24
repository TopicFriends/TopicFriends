import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {TopicInterest} from 'app/user-profile-shared/user-interests';
import {MatDialog} from "@angular/material";
import {UserSkillLevelsHaveWant} from '../../../user-profile-shared/user-skills.service'
import {UserProfileInputs} from '../../UserProfileInputs'
import { TagEntry } from '../../../topics-shared/tag-entry'
import { UserInterestConfigurationDialogComponent } from '../../../user-profile-shared/user-interest-configuration-dialog/user-interest-configuration-dialog.component'
import { SkillLevelPopoverComponent } from '../../../user-profile-shared/user-interest-configuration-dialog/skill-level-popover/skill-level-popover.component'

@Component({
  selector: 'app-user-skill',
  templateUrl: './user-skill.component.html',
  styleUrls: ['./user-skill.component.scss'],
})
export class UserSkillComponent implements OnInit {

  @Input() tag: TagEntry;
  tag2: TopicInterest;
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

  openDialog(e, topicInterest): void {

    let positionY = e.clientY;
    let positionX = e.clientX;

    let mobileMaxWidth:number = 600;

    let name = topicInterest.tagEntry.name;

    let dialogConfig = {
      position: {
        top: `${positionY}px`,
        left: `${positionX}px`,
        right:'',
        bottom:''
        // bottom:''
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
    }

    let dialogRef;
    const userConfig = JSON.parse(localStorage.getItem('userConfig'));

    if (userConfig && userConfig['show-interest-dialog']=== true){
      dialogConfig['minWidth'] = "350px";
      dialogConfig['maxWidth'] = "350px";
      dialogRef = this.dialog.open(UserInterestConfigurationDialogComponent, dialogConfig)
    } else {
      dialogRef = this.dialog.open(SkillLevelPopoverComponent, dialogConfig);
    }

    this.checkInitialPositionAndUpdate(dialogRef, dialogConfig);

    if( dialogConfig.hasOwnProperty('minWidth') ){
      /// Catch Event of changes in Skills Levels Dialog
      dialogRef.componentInstance.levelsChanged.subscribe((skillsChange)=>{
        this.levelsChanged.emit(skillsChange);
      });
    }

    dialogRef.afterClosed().subscribe(result => {
      console.log('skills popup afterClosed', result);
      this.levelsChanged.emit(result)
      // Save selected data
    });

  }

  private checkInitialPositionAndUpdate(dialogRef, dialogConfig){
    dialogRef.componentInstance.tellDialogWidth.subscribe(boundingClient => {
      if( boundingClient.left + boundingClient.width > window.innerWidth){
        dialogConfig.position.right = "0px";
        delete dialogConfig.position.left;
      }
      if( boundingClient.top + boundingClient.height > window.innerHeight){
        dialogConfig.position.bottom = "0px";
        delete dialogConfig.position.top;
      }
      dialogRef.updatePosition(dialogConfig.position);
    });
  }
}
