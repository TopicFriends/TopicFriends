// import { WhatUserWants } from './user-profile.service';
// import { ExampleData } from './what-user-wants.example-data';
//
// fdescribe('UserProfileService: getTopicMatchesWithinInteractionMode()', () => {
//   beforeEach(() => {
//     // TestBed.configureTestingModule({
//     //   providers: [UserProfileService]
//     // });
//   });
//
//   it('should be created', () => {
//     expect(WhatUserWants.getTopicMatchesWithinInteractionMode(
//       [], []
//     ).length).toBe(0);
//   });
//
//   it('should be created 2', () => {
//     expect(WhatUserWants.getTopicMatchesWithinInteractionMode(
//       [
//         {name: 'Angular'}
//       ], []
//     ).length).toBe(0);
//   });
//
//   it('should be created 2 2', () => {
//     expect(WhatUserWants.getTopicMatchesWithinInteractionMode(
//       [],
//       [
//         {name: 'Angular'}
//       ],
//     ).length).toBe(0);
//   });
//
//   it('should be created 3', () => {
//     expect(WhatUserWants.getTopicMatchesWithinInteractionMode(
//       [
//         {name: 'Angular'}
//       ], [
//         {name: 'Angular'}
//       ]
//     ).length).toBe(1);
//   });
//   it('should be created 4', () => {
//     expect(WhatUserWants.getTopicMatchesWithinInteractionMode(
//       [
//         {name: 'Angular'},
//         {name: 'Ionic'},
//       ],
//       [
//         {name: 'Angular'},
//         {name: 'Firebase'},
//       ],
//     ).length).toBe(1);
//   });
//
//   it('should be created 4 2', () => {
//     expect(WhatUserWants.getTopicMatchesWithinInteractionMode(
//       [
//         {name: 'Angular'},
//         {name: 'Firebase'},
//       ],
//       [
//         {name: 'Angular'},
//         {name: 'Ionic'},
//       ],
//     ).length).toBe(1);
//   });
//
//   it('should be created 5 1', () => {
//     expect(WhatUserWants.getTopicMatchesWithinInteractionMode(
//       [
//         {name: 'Angular'},
//         {name: 'TypeScript'},
//         {name: 'Firebase'},
//       ],
//       [
//         {name: 'TypeScript'},
//         {name: 'Firebase'},
//         {name: 'Angular'},
//         {name: 'Ionic'},
//       ],
//     ).length).toBe(3);
//   });
// });
//
//
// let whatUserWants: WhatUserWants;
// let testData: ExampleData;
//
// /** Better test cases naming TBD*/
//
// fdescribe('UserProfileService: getInterestsMatchWith()', () => {
//
//   beforeAll(() => {
//     testData = new ExampleData();
//   });
//
//   it('nothing supplied, should be matched: 0', () => {
//     whatUserWants = WhatUserWants.fromJson(null);
//     expect(whatUserWants.getInterestsMatchWith(whatUserWants).matchScore).toBe(0);
//   });
//
//   it('supplied non-matching (disjoint sets), should be matched: 0', () => {
//     let userExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_Ionic);
//     let othersExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_Android);
//
//     let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
//     expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(0);
//   });
//
//   it('supplied nothing, should be matched: 0', () => {
//     let userExchangeDetails = testData.createWhatUserWantsSymmetric(null);
//     let othersExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_IonicAndroidAngular);
//
//     let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
//     expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(0);
//   });
//
//   it('supplied non-matching, nothing for others, should be matched: 0', () => {
//     let userExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_IonicAndroidAngular);
//     let othersExchangeDetails = testData.createWhatUserWantsSymmetric(null);
//
//     let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
//     expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(0);
//   });
//
//   it('supplied - 1 for each matching, should be matched: 1', () => {
//     let userExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_Android);
//     let othersExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_Android);
//
//     let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
//     expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(1);
//   });
//
//   it('supplied - all matching, should be matched: 3', () => {
//     let userExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_IonicAndroidAngular);
//     let othersExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_IonicAndroidAngular);
//
//     let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
//     expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(3);
//   });
//
//   it('supplied - 2 out of 3 matching, should be matched: 2', () => {
//     let userExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_IonicAndroid);
//     let othersExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_IonicAndroidAngular);
//
//     let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
//     expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(2);
//   });
//
//   it('supplied - 2 out of 3 matching, should be matched: 2', () => {
//     let userExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_IonicAndroidAngular);
//     let othersExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_IonicAndroid);
//
//     let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
//     expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(2);
//   });
//
//   // ===========================
//
//   it('two symmetric branches with non-matching topics (2 against 1), should be matched: 0', () => {
//     let userExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_GraphicDesign, testData.topics_Ionic);
//     let othersExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_Android);
//
//     let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
//     expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(0);
//   });
//
//   it('two symmetric branches, with non-matching topics (2 against 2), should be matched: 0', () => {
//     let userExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_GraphicDesign, testData.topics_Ionic);
//     let othersExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_Android, testData.topics_Angular);
//
//     let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
//     expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(0);
//   });
//
//   it('two symmetric branches, with non-matching topics (1 against 2), should be matched: 0', () => {
//     let userExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_Ionic);
//     let othersExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_Android, testData.topics_Angular);
//
//     let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
//     expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(0);
//   });
//
//   it('two symmetric branches, with matching topics (2 against 1), should be matched: 1', () => {
//     let userExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_IonicAndroidAngular);
//     let othersExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_Android, testData.topics_GraphicDesign);
//
//     let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
//     expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(1);
//   });
//
//   it('two symmetric branches, with matching topics (2 against 2), should be matched: 1', () => {
//     let userExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_IonicAndroidAngular, testData.topics_Ionic);
//     let othersExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_Ionic, testData.topics_GraphicDesign);
//
//     let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
//     expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(1);
//   });
//
//   it('two symmetric branches, with matching topics (2 against 2), should be matched: 2', () => {
//     let userExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_IonicAndroidAngular, testData.topics_GraphicDesign);
//     let othersExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_Ionic, testData.topics_GraphicDesign);
//
//     let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
//     expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(2);
//   });
//
//   it('two symmetric branches, with cross-matching topics (2 against 2), should be matched: 0', () => {
//     let userExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_IonicAndroidAngular, testData.topics_GraphicDesign);
//     let othersExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_GraphicDesign, testData.topics_Ionic);
//
//     let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
//     expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(0);
//   });
//
//   it('three symmetric branches, with cross-matching topics (3 against 3), should be matched: 2', () => {
//     let userExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_IonicAndroidAngular, testData.topics_GraphicDesign, testData.topics_Ionic);
//     let othersExchangeDetails = testData.createWhatUserWantsSymmetric(testData.topics_Ionic, testData.topics_Ionic, testData.topics_Ionic);
//
//     let whatUserWants = WhatUserWants.fromJson(userExchangeDetails);
//     expect(whatUserWants.getInterestsMatchWith(othersExchangeDetails).matchScore).toBe(2);
//   });
//
// });
