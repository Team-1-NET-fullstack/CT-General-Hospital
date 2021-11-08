import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { zip } from 'rxjs';
import { PatientVisitService } from 'src/app/core/services/patient-visit.service';
import { VisitDetails } from 'src/app/shared/models/patient-visit-details.models';

@Component({
  selector: 'app-patient-visit-details',
  templateUrl: './patient-visit-details.component.html',
  styleUrls: ['./patient-visit-details.component.css'],
})
export class PatientVisitDetailsComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  visits: VisitDetails = new VisitDetails();

  constructor(
    private patientvisitservice: PatientVisitService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {}
  saveVisitDetails() {
    console.log(this.form);

    if (this.form.valid) {
      //console.log('form valid');
      this.visits.Reason = this.form.value.reason;
      this.visits.Duration = this.form.value.duration;
      this.visits.VisitDate = this.form.value.visitDate;
      this.visits.DiagnosisDescription = this.form.value.diagnosisDescription;
      this.visits.MedicationDescription = this.form.value.medicationDescription;
      this.visits.ProcedureDescription = this.form.value.procedureDescription;
      this.visits.AllergyDescription = this.form.value.allergyDescription;
      this.visits.PatientId = 12;
      this.visits.PhysicianId = 12;
      this.visits.StartTime = this.form.value.startTime;
      this.visits.CreatedBy = 11;
      this.visits.CreatedDate;
      (this.visits.updatedBy = 11), this.visits.updatedDate;

      this.patientvisitservice.addVisits(this.visits);
    }
    console.log(JSON.stringify(this.visits));
  }
}
