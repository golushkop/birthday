import { TestBed, inject } from '@angular/core/testing';

import { GetPostBirthdayDataService } from './get-post-birthday-data.service';

describe('GetPostBirthdayDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPostBirthdayDataService]
    });
  });

  it('should be created', inject([GetPostBirthdayDataService], (service: GetPostBirthdayDataService) => {
    expect(service).toBeTruthy();
  }));
});
