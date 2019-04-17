// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {
  SpecReporter
} = require('jasmine-spec-reporter');
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

const date = new Date();

var reporter = new HtmlScreenshotReporter({
  dest: 'e2e-screenshots',
  filename: 'my-report_' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '.html'
});

exports.config = {
  allScriptsTimeout: 30000,
  specs: [
    './e2e/**/login.e2e-spec.ts',
    './e2e/**/user-profile.e2e-spec.ts',
    './e2e/**/symmetric-topics.e2e-spec.ts',
    './e2e/**/events.e2e-spec.ts',
    // './e2e/**/geo-location.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: ["--disable-gpu", "--start-maximized"]
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4444/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 100000,
    print: function () {}
  },
  onPrepare: function () {
    browser.waitForAngularEnabled(false);

    //browser.driver.manage().window().maximize();

    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });

    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
    jasmine.getEnv().addReporter(reporter);
  },
  beforeLaunch: function () {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
    });
  },
  afterLaunch: function (exitCode) {
    return new Promise(function (resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
};
