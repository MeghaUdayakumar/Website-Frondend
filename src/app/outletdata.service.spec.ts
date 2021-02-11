import { TestBed } from '@angular/core/testing';

import { OutletdataService } from './outletdata.service';

describe('OutletdataService', () => {
  let service: OutletdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutletdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
