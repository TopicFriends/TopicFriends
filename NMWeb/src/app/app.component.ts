import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import {AuthService} from './user-profile/auth.service';
import {CookieLawComponent} from 'angular2-cookie-law'
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None /* to adjust things inside cookie law banner */,
})
export class AppComponent implements OnInit{

    @ViewChild(CookieLawComponent) cookieLawComponent: CookieLawComponent

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
      //Reset scroll on section change
      this.router.events.subscribe((val) => {
        window.scrollTo(0,0);
      })
  }

  dismissCookieLaw() {
    this.cookieLawComponent.dismiss()
  }

}
