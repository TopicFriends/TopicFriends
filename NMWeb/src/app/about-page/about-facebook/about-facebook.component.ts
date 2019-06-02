import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-facebook',
  templateUrl: './about-facebook.component.html',
  styleUrls: ['./about-facebook.component.scss']
})
export class AboutFacebookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initFacebook();
  }

  initFacebook() {
    let doc = document;
    let script : string = 'script';
    let sdkId : string = 'facebook-jssdk';

    var js, fjs = document.getElementsByTagName(script)[0];
    if (document.getElementById(sdkId)) return;
    js = document.createElement(script); js.id = sdkId;
    js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.10";
    fjs.parentNode.insertBefore(js, fjs);
  }

}
