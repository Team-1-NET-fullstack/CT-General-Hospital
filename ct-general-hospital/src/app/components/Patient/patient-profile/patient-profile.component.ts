import { Component, OnInit } from '@angular/core';
import { PatientDemographicsService } from 'src/app/core/services/patient-demographics.service';
import { DemographicsDetails } from 'src/app/shared/models/patient-demographics.model';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css'],
})
export class PatientProfileComponent implements OnInit {
  demographics: DemographicsDetails[] = [];
  constructor(private demographicsDetails: PatientDemographicsService) {
    this.demographics = this.demographicsDetails.demographics;
  }
  ngOnInit(): void {}
}
