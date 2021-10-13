import { TestBed } from '@angular/core/testing';

import { MedicalInformationService } from './medical-information.service';

describe('MedicalInformationService', () => {
  let service: MedicalInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
