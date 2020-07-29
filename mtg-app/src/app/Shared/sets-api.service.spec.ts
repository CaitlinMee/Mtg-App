import { TestBed } from '@angular/core/testing';

import { SetsApiService } from './sets-api.service';

describe('SetsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetsApiService = TestBed.get(SetsApiService);
    expect(service).toBeTruthy();
  });
});
