import {$, $$, browser, by, element, ElementArrayFinder, ElementFinder, protractor} from 'protractor'
import {promise} from 'selenium-webdriver'
import Promise = promise.Promise
import {TestWait} from '../../../test-support/wait'
import {TestSupport} from '../../../test-support/test-support'

export class GeoLocationSection {
  private wait: TestWait = new TestWait()
  private support: TestSupport = new TestSupport()

  whereILive = element(by.cssContainingText('app-user-geo-location', 'Where I live:'))
  whereILiveInput = this.whereILive.$('input')
  whereILivePick = this.whereILive.element(by.xpath('..')).element(by.cssContainingText('button span', 'Pick'))
  whereILiveClear = this.whereILive.element(by.cssContainingText('button span', 'Clear'))

  whereIWork = element(by.cssContainingText('app-user-geo-location', 'Where I work:'))
  whereIWorkInput = this.whereIWork.$('input')
  whereIWorkPick = this.whereIWork.element(by.cssContainingText('button span', 'Pick'))
  whereIWorkClear = this.whereIWork.element(by.cssContainingText('button span', 'Clear'))

  whereIStudy = element(by.cssContainingText('app-user-geo-location', 'Where I study:'))
  whereIStudyInput = this.whereIStudy.$('input')
  whereIStudyPick = this.whereIStudy.element(by.cssContainingText('button span', 'Pick'))
  whereIStudyClear = this.whereIStudy.element(by.cssContainingText('button span', 'Clear'))

  whereIStudied = element(by.cssContainingText('app-user-geo-location', 'Where I studied:'))
  whereIStudiedInput = this.whereIStudied.$('input')
  whereIStudiedPick = this.whereIStudied.element(by.cssContainingText('button span', 'Pick'))
  whereIStudiedClear = this.whereIStudied.element(by.cssContainingText('button span', 'Clear'))

  whereIVisit = element(by.cssContainingText('app-user-geo-location', 'Where I visit:'))
  whereIVisitInput = this.whereIVisit.$('input')
  whereIVisitPick = this.whereIVisit.element(by.cssContainingText('button span', 'Pick'))
  whereIVisitClear = this.whereIVisit.element(by.cssContainingText('button span', 'Clear'))

  hometown = element(by.cssContainingText('app-user-geo-location', 'Hometown:'))
  hometownInput = this.hometown.$('input')
  hometownPick = this.hometown.element(by.cssContainingText('button span', 'Pick'))
  hometownClear = this.hometown.element(by.cssContainingText('button span', 'Clear'))

  pickerModal = $('app-user-pick-location')
  searchTermInput = this.pickerModal.$('input')
  modalAccept = this.pickerModal.element(by.cssContainingText('button span', 'Accept'))

  navigateTo(): Promise<any> {
    return browser.get('profile')
  }

  navigateToReadOnly() {
    return browser.get('user/sSV63l8KnIPCVaDUUm2XPPe1sVD2')
  }

  selectPlaceOnMap(elementPicker: ElementFinder) {
    this.wait.forElementClickable(elementPicker)
    elementPicker.click()
    this.wait.forElementVisible(this.pickerModal)
    let searchTerm = new Date().getMilliseconds().toPrecision(3)
    this.searchTermInput.sendKeys(searchTerm)
    console.log('search term: ' + searchTerm)
    this.selectFirstSuggestedAddress()
    browser.sleep(500)
    this.modalAccept.click()
  }

  // selectPointOnMap(){
  //
  // }

  catchGeoLocationFromMap() {
    let longitude = $('agm-map#pickLocationMap').getAttribute('ng-reflect-longitude')
    longitude.then(lon => {
      console.log(lon)
    })
    let latitude = $('agm-map#pickLocationMap').getAttribute('ng-reflect-latitude')
    latitude.then(lat => {
      console.log(lat)
    })
  }

  selectFirstSuggestedAddress() {//: Promise<string> {
    this.wait.forElementPresent(this.searchTermInput)
    this.searchTermInput.sendKeys(protractor.Key.ARROW_DOWN)
    browser.sleep(500)
    // let optionSelected = markedTopicFromSelectList.getText()
    this.searchTermInput.sendKeys(protractor.Key.ENTER)

    //return optionSelected
  }
}
