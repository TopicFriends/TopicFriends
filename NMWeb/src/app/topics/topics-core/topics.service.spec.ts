import { TestBed, inject } from '@angular/core/testing';

import { TopicsService } from './topics.service';

describe('TopicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopicsService]
    });
  });

  it('should be created', inject([TopicsService], (service: TopicsService) => {
    expect(service).toBeTruthy();
  }));

  it('prevents duplicate topics', inject([TopicsService], (service: TopicsService) => {
    // TODO: this should really be a test for TopicsModel
    spyOn(window, 'alert')

    service.addTopic('toDup')
    expect(service.getTopicById('toDup').id).toEqual('toDup')
    expect(window.alert).not.toHaveBeenCalled()
    service.addTopic('toDup')
    expect(window.alert).toHaveBeenCalled()
  }));

});
