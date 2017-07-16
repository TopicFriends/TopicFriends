import {browser} from 'protractor';
var fs = require('fs-extra');

export class CommonUtils {
  TMP_FOLDER_PATH = '/tmp/protractor';

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
      let stream = fs.createWriteStream(filePath + '/' + filename + '.png');
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
  }

  private createDirectoryRecursively(path: string) {
    fs.mkdirp(path, function (err) {
      if (err) {
        console.error('Directory "' + path + '" not created!', err);
      } else {
        console.log('Directory "' + path + '" created!')
      }
    });
  }
}
