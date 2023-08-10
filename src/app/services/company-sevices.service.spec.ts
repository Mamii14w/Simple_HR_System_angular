import { TestBed } from '@angular/core/testing';

import { CompanySevicesService } from './company-sevices.service';

describe('CompanySevicesService', () => {
  let service: CompanySevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanySevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
