import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MedicalInformationService } from 'src/app/core/services/medical-information.service';
import { DiagnosisDetails } from 'src/app/shared/models/diagnosis-details.model';

@Component({
  selector: 'app-diagnosis-details',
  templateUrl: './diagnosis-details.component.html',
  styleUrls: ['./diagnosis-details.component.css'],
})
export class DiagnosisDetailsComponent implements OnInit {
  diagnosisCode = new FormControl();
  diagnosisCodeList: string[] = [
    'A00 - Cholera',
    'A00.1 - Cholera due to Vibrio cholerae 01',
    'B00 - biovar cholerae',
    'T00 - Typhoid',
  ];
  form: FormGroup = new FormGroup({});
  listOfObjects: Object[] = [];

  constructor(private medicalInformationService: MedicalInformationService) {}

  ngOnInit(): void {
    let diagnosisCode = null;
    let diagnosisDescription = null;
    let isDepricated = false;

    this.form = new FormGroup({
      diagnosisCode: new FormControl(diagnosisCode, [Validators.required]),
      diagnosisDescription: new FormControl(diagnosisDescription, [
        Validators.required,
      ]),
      isDepricated: new FormControl(isDepricated, [Validators.required]),
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
  saveDiagnosis() {
    const diagnosisCode = this.form.value.diagnosisCode;
    const diagnosisDescription = this.form.value.diagnosisDescription;
    const isDepricated = this.form.value.isDepricated;
    const updatedBy = 'robert@ctgeneral.com';
    const insertedDate = new Date();
  }
  add() {
    // Gathering data
    const patientVisitId = 1234;
    const diagnosisCode = this.form.value.diagnosisCode;
    const diagnosisDescription = this.form.value.diagnosisDescription;
    const isDepricated = this.form.value.isDepricated;
    const updatedBy = 'robert@ctgeneral.com';
    const insertedDate = new Date();

    // Create Ob
    const ob = new DiagnosisDetails(
      patientVisitId,
      diagnosisCode,
      diagnosisDescription,
      isDepricated,
      insertedDate,
      updatedBy
    );

    this.listOfObjects.push(ob);
    // console.log('Added to list');
    // Send to service
  }

  saveDiagnosisDetails() {
    this.medicalInformationService.addDiagnosisDetails(this.listOfObjects);
    alert('Record Added');
  }
}
