import { TestBed } from '@angular/core/testing';

import { DlamTableService } from './dlam-table.service';

describe('DlamTableService', () => {
  let service: DlamTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DlamTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
