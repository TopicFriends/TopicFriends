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

  isSeen: boolean

  constructor() { }

  ngOnInit() {
  }

  dismissCookieLaw() {
    this.cookieLawComponent.dismiss()
    this.isSeen = true
  }

  onIsSeen(isSeen: boolean) {
    console.log('onIsSeen', isSeen)
    this.isSeen = isSeen
  }
}
