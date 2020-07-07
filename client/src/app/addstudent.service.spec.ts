import { TestBed, inject } from '@angular/core/testing';

import { AddstudentService } from './addstudent.service';

describe('AddstudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddstudentService]
    });
  });

  it('should be created', inject([AddstudentService], (service: AddstudentService) => {
    expect(service).toBeTruthy();
  }));
});
