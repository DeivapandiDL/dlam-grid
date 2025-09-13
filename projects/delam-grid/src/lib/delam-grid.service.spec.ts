import { TestBed } from '@angular/core/testing';

import { DelamGridService } from './delam-grid.service';

describe('DelamGridService', () => {
  let service: DelamGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelamGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
