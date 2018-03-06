import { Injectable } from '@angular/core';

@Injectable()
export class UserConfigService {

  constructor() { }

  setUserConfiguration(userConfig) {
    localStorage.setItem('userConfig', JSON.stringify(userConfig));
  }

  getUserConfiguration() {
    return JSON.parse(localStorage.getItem('userConfig')) || {};
  }

  setPrivacityValue(value){
    localStorage.setItem('privacity', value);
  }

  getPrivacityValue() {
    return localStorage.getItem('privacity');
  }

}
