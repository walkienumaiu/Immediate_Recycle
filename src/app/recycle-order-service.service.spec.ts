import { TestBed } from '@angular/core/testing';

import { RecycleOrderServiceService } from './recycle-order-service.service';

describe('RecycleOrderServiceService', () => {
  let service: RecycleOrderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecycleOrderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
