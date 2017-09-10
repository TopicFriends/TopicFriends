// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 15000,
  specs: [
    './e2e/**/login.e2e-spec.ts',
    './e2e/**/user-profile.e2e-spec.ts',
    './e2e/**/symmetric-topics.e2e-spec.ts',
    './e2e/**/events.e2e-spec.ts',
  ],
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
    args: ["--disable-gpu"]
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4444/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    isVerbose: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare: function() {
    browser.waitForAngularEnabled(false);

    // Disable animations so e2e tests run more quickly
    var disableNgAnimate = function() {
      angular.module('disableNgAnimate', []).run(function($animate) {
        $animate.enabled(false);
      })
    };
    browser.addMockModule('disableNgAnimate', disableNgAnimate);

    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });

    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
