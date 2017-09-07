import {browser, ExpectedConditions} from 'protractor';
let fs_extra = require('fs-extra');

export class TestSupport {
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

    browser.takeScreenshot().then((png) => {
      let filename = prefix + '-' + new Date().getTime();
      let stream = fs_extra.createWriteStream(filePath + '/' + filename + '.png');
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
  }

  switchTabs(tab: number) {
    return browser.getAllWindowHandles().then((handles) => {
      browser.switchTo().window(handles[tab]);
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
