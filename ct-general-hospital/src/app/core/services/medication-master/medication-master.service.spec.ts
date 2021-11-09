import { TestBed } from '@angular/core/testing';

import { MedicationMasterService } from './medication-master.service';

describe('MedicationMasterService', () => {
  let service: MedicationMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicationMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
