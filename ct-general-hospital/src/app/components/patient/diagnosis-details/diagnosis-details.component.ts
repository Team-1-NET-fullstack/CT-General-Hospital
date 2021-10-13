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
  form: FormGroup = new FormGroup({});

  constructor(private medicalInformationService: MedicalInformationService) {}

  ngOnInit(): void {
    let diagnosisCode= null;
    let diagnosisDescription= null;
    let isDepricated= false;
    

    this.form = new FormGroup({
      diagnosisCode: new FormControl(diagnosisCode, [
        Validators.required,
      ]),
      diagnosisDescription: new FormControl(diagnosisDescription, [
        Validators.required,
      ]),
      isDepricated: new FormControl(isDepricated, [
        Validators.required,
      ]),
     
    });
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }
  saveDiagnosisDetails() {
    // Gathering data
    const patientVisitId = 1234;
    const diagnosisCode = this.form.value.diagnosisCode;
    const diagnosisDescription = this.form.value.diagnosisDescription;
    const isDepricated = this.form.value.isDepricated;
    const updatedBy='robert@ctgeneral.com';
    const insertedDate=new Date();
    const id = this.form.value.id;

    // Create Ob
    const ob = new DiagnosisDetails(
      patientVisitId,
      diagnosisCode,
      diagnosisDescription,
      isDepricated,
      insertedDate,
      updatedBy,
       id,
    );

    // Send to service
   this.medicalInformationService.addDiagnosisDetails(ob);
   alert("Record Added");
  }
}
