import { TestBed, inject } from '@angular/core/testing';

import { GetuidService } from './getuid.service';

describe('GetuidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetuidService]
    });
  });

  it('should be created', inject([GetuidService], (service: GetuidService) => {
    expect(service).toBeTruthy();
  }));
});
