import {browser, ElementFinder, ExpectedConditions} from 'protractor';
import {timeout} from 'rxjs/operator/timeout'
let fs_extra = require('fs-extra');

export class CommonUtils {
  TMP_FOLDER_PATH = '/tmp/protractor';
  private ec = ExpectedConditions;

  constructor() {
    let fs = require('fs');
    if (!fs.existsSync(this.TMP_FOLDER_PATH)) {
      this.createDirectoryRecursively(this.TMP_FOLDER_PATH);
    }
  }

  takeScreenshot(prefix: string, path?: string) {
    let filePath;
    if(path) {
      filePath = path;
    }
    else {
      filePath = this.TMP_FOLDER_PATH
    }

    browser.takeScreenshot().then(function (png) {
      let filename = prefix + '-' + new Date().getTime();
      let stream = fs_extra.createWriteStream(filePath + '/' + filename + '.png');
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
  }

  waitForElement(element: ElementFinder) {
    return browser.wait((this.ec.presenceOf(element)), 10000, 'false');   //TODO: use default timeout
  }

  waitForElementNotPresent(element: ElementFinder) {
    return browser.wait(this.ec.not(this.ec.presenceOf(element)));
  }

  switchTabs(tab: number) {
    browser.getAllWindowHandles().then(function (handles) {
      browser.driver.switchTo().window(handles[tab]);
    });
  }

  private createDirectoryRecursively(path: string) {
    fs_extra.mkdirp(path, function (err) {
      if (err) {
        console.error('Directory "' + path + '" not created!', err);
      } else {
        console.log('Directory "' + path + '" created!')
      }
    });
  }
}
