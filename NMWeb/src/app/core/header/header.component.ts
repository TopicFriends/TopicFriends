import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/user-profile-shared/auth.service";
import {CapitalizeFirstPipe} from "../../shared/pipes/capitalize-first.pipe";
import {Title} from "@angular/platform-browser";
import {NavigationEnd, Router} from "@angular/router";
import {CleanUrlPipe} from "../../shared/pipes/clean-url.pipe";
import {
  MatDialog,
} from '@angular/material'
import { LoginComponent } from '../../login/login.component'
import { UserInterestConfigurationDialogComponent } from '../../user-profile-shared/user-interest-configuration-dialog/user-interest-configuration-dialog.component'
import { SkillLevelPopoverComponent } from '../../user-profile-shared/user-interest-configuration-dialog/skill-level-popover/skill-level-popover.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = 'TopicFriends';
  private dialogRef;

  constructor(
    public authService: AuthService,
    private router: Router,
    private titleService: Title,
    private cleanUrlPipe: CleanUrlPipe,
    private capitalizeFirstPîpe: CapitalizeFirstPipe,
    private dialog: MatDialog,
  ) {

    this.authService.user.subscribe((user) => {
      if(user) {
        this.closeDialog();
      }
    });

    router.events.subscribe( val => {
      if( val instanceof NavigationEnd ){
        let title = this.capitalize(this.clearUrl(val.url))
        titleService.setTitle(`${title} - ${this.title}`);
      }
    })
  }

  ngOnInit() {
  }

  clearUrl(url){
    return this.cleanUrlPipe.transform(url);
  }

  capitalize(string){
    return this.capitalizeFirstPîpe.transform(string);
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(LoginComponent);
  }

  closeDialog(): void {
    if(this.dialogRef){
      this.dialogRef.close();
    }
  }

}
