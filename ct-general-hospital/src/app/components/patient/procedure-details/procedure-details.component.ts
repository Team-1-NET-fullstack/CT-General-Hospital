import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MedicalInformationService } from 'src/app/core/services/medical-information.service';
import { ProcedureDetails } from 'src/app/shared/models/procedure-details.model';

@Component({
  selector: 'app-procedure-details',
  templateUrl: './procedure-details.component.html',
  styleUrls: ['./procedure-details.component.css'],
})
export class ProcedureDetailsComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private medicalInformationService: MedicalInformationService) {}

  ngOnInit(): void {
    let procedureId= null;
    let procedureDescription= null;
    let isDepricated= false;
    

    this.form = new FormGroup({
      procedureId: new FormControl(procedureId, [
        Validators.required,
      ]),
      procedureDescription: new FormControl(procedureDescription, [
        Validators.required,
        Validators.maxLength(60),
      ]),
      isDepricated: new FormControl(isDepricated, [
        Validators.required,
        
      ]),
     
    });
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }
  saveProcedureDetails() {
    // Gathering data
    const patientVisitId = 1234;
    const procedureId = this.form.value.procedureId;
    const procedureDescription = this.form.value.procedureDescription;
    const isDepricated = this.form.value.isDepricated;
    const updatedBy='robert@ctgeneral.com';
    const insertedDate=new Date();
    const id = this.form.value.id;

    // Create Ob
    const ob = new ProcedureDetails(
      patientVisitId,
      procedureId,
      procedureDescription,
      isDepricated,
      insertedDate,
      updatedBy,
       id,
    );

    // Send to service
   this.medicalInformationService.addProcedureDetails(ob);
   alert("Record Added");
  }
}
