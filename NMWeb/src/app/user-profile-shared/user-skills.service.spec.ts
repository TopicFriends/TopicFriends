import { TestBed, inject } from '@angular/core/testing';

import { UserSkillsService } from './user-skills.service';

describe('UserSkillsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSkillsService]
    });
  });

  xit('should be created', inject([UserSkillsService], (service: UserSkillsService) => {
    expect(service).toBeTruthy();
  }));
});
