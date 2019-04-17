"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var testcafe_1 = require("testcafe");
var url = "http://localhost:4444/";
var loginButton = testcafe_1.Selector("body > app-root > div > app-header > mat-toolbar > button.user-profile-corner-button.mat-button.ng-star-inserted > span");
var googleLogIn = testcafe_1.Selector("#mat-dialog-0 > app-login > div > button:nth-child(2)");
var userClass = testcafe_1.Selector(".riddkc");
//
var usernameField = testcafe_1.Selector("#identifierId");
var userEmail = "qa.cod3r@gmail.com";
var passwordField = testcafe_1.Selector(".I0VJ4d > div:nth-child(1) > input:nth-child(1)");
var userPassword = "lekcjaonlineprod";
fixture(templateObject_1 || (templateObject_1 = __makeTemplateObject(["TopicFriend"], ["TopicFriend"]))).page(url);
test("As a user I want to log in.", function (t) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, t.click(loginButton).click(googleLogIn)];
            case 1:
                _a.sent();
                return [4 /*yield*/, t
                        .typeText(usernameField, userEmail)
                        .pressKey("enter")
                        .typeText(passwordField, userPassword)
                        .pressKey("enter")
                        .typeText("#mat-input-1", "My name")
                        .typeText("#mat-input-2", "My name")
                        .typeText("#mat-input-3", "My name")];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
var templateObject_1;
