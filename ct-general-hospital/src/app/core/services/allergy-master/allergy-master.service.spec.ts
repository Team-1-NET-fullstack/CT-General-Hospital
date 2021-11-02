import { TestBed } from '@angular/core/testing';

import { AllergyMasterService } from './allergy-master.service';

describe('AllergyMasterService', () => {
  let service: AllergyMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllergyMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
