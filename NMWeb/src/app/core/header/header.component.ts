import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/user-profile/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = 'TopicFriends';


  constructor(
    public authService: AuthService,
  ) {
    this.authService.user.subscribe((user) => {
    });
  }

  ngOnInit() {
  }

}
