import { TestBed, inject } from '@angular/core/testing';

import { ScheduledataService } from './scheduledata.service';

describe('ScheduledataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScheduledataService]
    });
  });

  it('should be created', inject([ScheduledataService], (service: ScheduledataService) => {
    expect(service).toBeTruthy();
  }));
});
