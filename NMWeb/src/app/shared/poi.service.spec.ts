import { TestBed, inject } from '@angular/core/testing';

import { PoiService } from './poi.service';

describe('PoiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoiService]
    });
  });

  xit('should be created', inject([PoiService], (service: PoiService) => {
    expect(service).toBeTruthy();
  }));
});
