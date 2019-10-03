import { TestBed } from '@angular/core/testing';

import { RoomdataService } from './roomdata.service';

describe('RoomdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomdataService = TestBed.get(RoomdataService);
    expect(service).toBeTruthy();
  });
});
