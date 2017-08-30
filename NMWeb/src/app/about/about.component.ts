import { Component, OnInit } from '@angular/core';
import {angular, angularFire, angularMaterial, firebase, ionic, materialDesign, reactiveX, rxJs, typeScript} from '../shared/topics.service'
import {Tag} from '@angular/compiler/src/i18n/serializers/xml_helper'
import {TopicInterest} from '../user-profile/user-interests'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  angular = new TopicInterest(angular)
  angularFire = new TopicInterest(angularFire)
  firebase = new TopicInterest(firebase)
  rxJs = new TopicInterest(rxJs)
  typeScript = new TopicInterest(typeScript)
  materialDesign = new TopicInterest(materialDesign)
  angularMaterial = new TopicInterest(angularMaterial)
  ionic = new TopicInterest(ionic)
  reactiveX =  new TopicInterest(reactiveX)


  constructor() { }

  ngOnInit() {
  }

}
