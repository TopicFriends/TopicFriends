import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import {AuthService} from './user-profile/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PeopleMatcher';


  constructor(
    public authService: AuthService,
  ) {
    this.authService.user.subscribe((user) => {
      // alert('auth service user fires');
      console.log('auth service user fires', user);
    });
  }

}
