import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-of-service',
  templateUrl: './terms-of-service-page.component.html',
  styleUrls: ['./terms-of-service-page.component.scss']
})
export class TermsOfServicePageComponent implements OnInit {
  lastUpdate: string = "1 de Marzo de 2018";

  constructor() { }

  ngOnInit() {
  }

}
