import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {Router} from '@angular/router'
import {MediaMatcher} from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None /* to adjust things inside cookie law banner */,
})
export class AppComponent implements OnInit {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  @ViewChild('sidenav')
  private sidenav: MatSidenav;

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

        if (this.mobileQuery.matches) {
          this.sidenav.close();
        }
      })
  }

}
