import { Component, OnInit } from '@angular/core';
import { navs } from './nav-pages'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navs = navs

  constructor() { }

  ngOnInit() {
    // console.log('navs', this.navs)
  }

}
