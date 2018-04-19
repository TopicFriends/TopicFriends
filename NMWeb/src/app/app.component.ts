import {ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import {AuthService} from './user-profile-shared/auth.service';
import {CookieLawComponent} from 'angular2-cookie-law'
import {Router} from '@angular/router'
import {MediaMatcher} from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None /* to adjust things inside cookie law banner */,
})
export class AppComponent implements OnInit{

    @ViewChild(CookieLawComponent) cookieLawComponent: CookieLawComponent
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
      //Reset scroll on section change

    this.router.events.subscribe((val) => {
        if(!this.router.url.includes('#')) {
          window.scrollTo(0,0);
        }
      })
  }

  dismissCookieLaw() {
    this.cookieLawComponent.dismiss()
  }

}
