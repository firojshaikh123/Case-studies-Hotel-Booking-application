import { TestBed } from '@angular/core/testing';

import { HoteldataService } from './hoteldata.service';

describe('HoteldataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoteldataService = TestBed.get(HoteldataService);
    expect(service).toBeTruthy();
  });
});
