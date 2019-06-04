import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from "app/user-profile-shared/auth.service";
import {CapitalizeFirstPipe} from "../../shared/pipes/capitalize-first.pipe";
import {Title} from "@angular/platform-browser";
import {NavigationEnd, Router} from "@angular/router";
import {CleanUrlPipe} from "../../shared/pipes/clean-url.pipe";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = 'TopicFriends';

  @Input() sidenav;

  constructor(
    public authService: AuthService,
    private router: Router,
    private titleService: Title,
    private cleanUrlPipe: CleanUrlPipe,
    private capitalizeFirstPipe: CapitalizeFirstPipe,
  ) {
    router.events.subscribe( val => {
      if( val instanceof NavigationEnd ){
        let title = this.capitalize(this.clearUrl(val.url));
        (title) ? titleService.setTitle(`${title} - ${this.title}`) : titleService.setTitle(this.title);
      }
    })
  }

  ngOnInit() {
  }

  clearUrl(url){
    return this.cleanUrlPipe.transform(url);
  }

  capitalize(string){
    return this.capitalizeFirstPipe.transform(string);
  }

}
