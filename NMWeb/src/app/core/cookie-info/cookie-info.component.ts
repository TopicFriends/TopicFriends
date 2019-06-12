import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CookieLawComponent } from 'angular2-cookie-law'

@Component({
  selector: 'app-cookie-info',
  templateUrl: './cookie-info.component.html',
  styleUrls: ['./cookie-info.component.sass']
})
export class CookieInfoComponent implements OnInit {

  @ViewChild(CookieLawComponent) cookieLawComponent: CookieLawComponent

  constructor() { }

  ngOnInit() {
  }

  dismissCookieLaw() {
    this.cookieLawComponent.dismiss()
  }

}
