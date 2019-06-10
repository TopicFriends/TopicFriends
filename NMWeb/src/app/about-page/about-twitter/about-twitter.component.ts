import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-twitter',
  templateUrl: './about-twitter.component.html',
  styleUrls: ['./about-twitter.component.sass']
})
export class AboutTwitterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initTwitter();
  }

  initTwitter() {
    let doc = document;
    let script : string = 'script';
    let twitterWidgets : string = 'twitter-widgets-script';

    var js, fjs = document.getElementsByTagName(script)[0];
    if (document.getElementById(twitterWidgets)) return;
    js = document.createElement(script); js.id = twitterWidgets;
    js.src = "https://platform.twitter.com/widgets.js";
    js.async = true;
    fjs.parentNode.insertBefore(js, fjs);
  }


}
