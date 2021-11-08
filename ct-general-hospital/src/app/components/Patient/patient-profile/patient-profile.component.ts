import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientDemographicsService } from 'src/app/core/services/patient-demographics.service';
import { DemographicsDetails } from 'src/app/shared/models/patient-demographics.model';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css'],
})
export class PatientProfileComponent implements OnInit {
  demographics: any[] = [];
  constructor(
    private patientDemgraphicService: PatientDemographicsService,
    private route: Router
  ) {
    patientDemgraphicService
      .loadDemographicsDetails()
      .subscribe((demographicsDetails) => {
        this.demographics.splice(0, this.demographics.length); // Clear array
        this.demographics.push(...demographicsDetails); // add new element
        // debugger
        console.log(this.demographics);
      });
  }
  PatientDetails(patientId: number) {
    // debugger
    this.route.navigate(['/nurse/patient-visit/', patientId]);

    console.log('this is displaying patient id ' + patientId);
  }

  //  demographics:DemographicsDetails[]=[];
  //   this.demographics = this.demographicsDetails.demographics;
  // PatientDemographicsService.a
  //  console.log("DemographicsDetails:", this.demographics);
  // }
  ngOnInit(): void {}
}
