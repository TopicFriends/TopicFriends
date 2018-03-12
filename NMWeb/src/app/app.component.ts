import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import {AuthService} from './user-profile-shared/auth.service';
import {CookieLawComponent} from 'angular2-cookie-law'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None /* to adjust things inside cookie law banner */,
})
export class AppComponent {

    @ViewChild(CookieLawComponent) cookieLawComponent: CookieLawComponent

  dismissCookieLaw() {
    this.cookieLawComponent.dismiss()
  }

}
