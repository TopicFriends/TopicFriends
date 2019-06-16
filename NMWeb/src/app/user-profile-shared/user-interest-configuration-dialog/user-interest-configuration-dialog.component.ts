import {Component, EventEmitter, OnInit, Input, Output, AfterViewInit, ElementRef} from '@angular/core';
import {Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {TopicInterest} from "../user-interests";
import {SkillLevelPopoverComponent} from "./skill-level-popover/skill-level-popover.component";
import {UserSkillLevelsHaveWant} from '../user-skills.service';
import { TagEntry } from '../../topics/topics-shared/tag-entry'


@Component({
  selector: 'app-user-interest-configuration-dialog',
  templateUrl: './user-interest-configuration-dialog.component.html',
  styleUrls: ['./user-interest-configuration-dialog.component.scss']
})
export class UserInterestConfigurationDialogComponent implements OnInit, AfterViewInit {

  public dialogSize = {
    width: 360,
    height: 400
  }

  @Output() tellDialogWidth = new EventEmitter();

  public logo: String;
  public tag2: TopicInterest;

  @Output() levelsChanged = new EventEmitter<UserSkillLevelsHaveWant>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Inject(MAT_DIALOG_DATA) public tag: TagEntry,
    // @Inject(MAT_DIALOG_DATA) public skillLevels: UserSkillLevelsHaveWant,
    public dialog: MatDialog,
    public el: ElementRef,
  ) {

    /// SETTING ADITIONAL DATA - IT SHOULD BE TAKEN FROM DB
    data.actions = [
      "exchange knowledge",
      "do hackathon",
      "pair programming"
    ];
    data.supplyDemandActions = [
      {
        title: "reviews",
        actions: [
          "do",
          "find"
        ]
      },
      {
        title: "mentoring",
        actions: [
          "do",
          "find"
        ]
      },
      {
        title: "internship",
        actions: [
          "do",
          "find"
        ]
      },
      {
        title: "consulting",
        actions: [
          "do",
          "find"
        ]
      },
      {
        title: "co-founder",
        actions: [
          "do",
          "find"
        ]
      },
      {
        title: "business partner",
        actions: [
          "do",
          "find"
        ]
      },
    ]
  }

  ngOnInit() {
    this.tag2 = new TopicInterest(this.tag);
    this.logo = this.data.tag2.tagEntry.logo;
    //console.log(this.data);
    // if ( this.skillLevels ) {
    //   console.log('UserSkillComponent, skillLevels', this.skillLevels)
    // }
  }

  ngAfterViewInit(){
    this.tellDialogWidth.emit(this.el.nativeElement.getBoundingClientRect())
  }

  openDialog(e, topicInterest = this.tag2): void {
    //// OPEN DIALOG SKILL LEVEL DIALOG ////
    let positionY = e.clientY;
    let positionX = e.clientX;

    let mobileMaxWidth:number = 600;

    let name = topicInterest.tagEntry.name;

    let dialogConfig = {
      // id: "skill-level-dialog",
      autoFocus: false,
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
        userProfileInputs: this.data.userProfileInputs,
        skillLevels: this.data.skillLevels
      },
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
      if (result){
        this.data.skillLevels = result;
        this.levelsChanged.emit(result);
      }
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

