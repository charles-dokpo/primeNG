import { TestBed } from '@angular/core/testing';

import { BankHolidayService } from './bank-holiday.service';

describe('BankHolidayService', () => {
  let service: BankHolidayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankHolidayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
