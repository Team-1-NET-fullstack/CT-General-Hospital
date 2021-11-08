import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DemographicsDetails } from 'src/app/shared/models/patient-demographics.model';

@Component({
  selector: 'app-patient-visit',
  templateUrl: './patient-visit.component.html',
  styleUrls: ['./patient-visit.component.css'],
})
export class PatientVisitComponent implements OnInit {
  constructor(private route: Router, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      //  debugger;
      console.log('this is id from patient visit:-  ' + params['patientId']);
    });
  }
}
