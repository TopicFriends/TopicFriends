import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from 'app/user-profile/auth.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = 'PeopleMatcher';
  private _innerPage: boolean = false;
  
  constructor(
    public authService: AuthService,
    private _router: Router,
    private _location: Location
  ) {
    this.authService.user.subscribe((user) => {
      // alert('auth service user fires');
      console.log('auth service user fires', user);
    });

    this._router.events.subscribe((event)=>{
     if(event instanceof NavigationStart) {
       // TODO: Should be done with generic RegExp
       this._innerPage = event.url == '/event-details' || event.url.includes('/people-list/')
     }
    })
  }

  ngOnInit() {
  }

  onBackPressed(){
    this._location.back();
  }

}
