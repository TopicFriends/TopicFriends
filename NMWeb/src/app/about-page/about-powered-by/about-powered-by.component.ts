import { Component, OnInit } from '@angular/core';
import { TopicInterest } from '../../user-profile-shared/user-interests'
import {
  angular,
  angularFire,
  angularFlexLayout,
  angularMaterial,
  businessNetworking,
  entrepreneurship,
  firebase,
  ionic,
  jasmine,
  karma,
  materialDesign,
  npm,
  protractor,
  reactiveX,
  rxJs,
  sass,
  typeScript,
  webPack,
} from '../../topics/topics-core/topics.data'

@Component({
  selector: 'app-about-powered-by',
  templateUrl: './about-powered-by.component.html',
  styleUrls: ['./about-powered-by.component.scss']
})
export class AboutPoweredByComponent implements OnInit {

  entrepreneurship = new TopicInterest(entrepreneurship)
  businessNetworking = new TopicInterest(businessNetworking)
  angular = new TopicInterest(angular)
  angularFire = new TopicInterest(angularFire)
  angularFlexLayout =  new TopicInterest(angularFlexLayout)
  firebase = new TopicInterest(firebase)
  rxJs = new TopicInterest(rxJs)
  typeScript = new TopicInterest(typeScript)
  materialDesign = new TopicInterest(materialDesign)
  angularMaterial = new TopicInterest(angularMaterial)
  ionic = new TopicInterest(ionic)
  reactiveX =  new TopicInterest(reactiveX)
  protractor =  new TopicInterest(protractor)
  karma = new TopicInterest(karma)
  jasmine = new TopicInterest(jasmine)
  webpack = new TopicInterest(webPack)
  npm = new TopicInterest(npm)
  sass = new TopicInterest(sass)


  constructor() { }

  ngOnInit() {
  }

}
