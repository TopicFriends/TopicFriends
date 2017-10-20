import { TestBed, inject } from '@angular/core/testing';

import { GitHubService } from './git-hub.service';

describe('GitHubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitHubService]
    });
  });

  it('should be created', inject([GitHubService], (service: GitHubService) => {
    expect(service).toBeTruthy();
  }));
});
