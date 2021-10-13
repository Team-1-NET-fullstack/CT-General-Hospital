import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MedicalInformationService } from 'src/app/core/services/medical-information.service';
import { MedicationDetails } from 'src/app/shared/models/medication-details.model';

@Component({
  selector: 'app-medication-details',
  templateUrl: './medication-details.component.html',
  styleUrls: ['./medication-details.component.css'],
})
export class MedicationDetailsComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private medicalInformationService: MedicalInformationService) {}

  ngOnInit(): void {
    let drugId= null;
    let drugName= null;
    let drugGenericName = null;
    let drugBrandName = null;
    let drugForm= null;

    this.form = new FormGroup({
      drugId: new FormControl(drugId, [
        Validators.required,
       
      ]),
      drugBrandName: new FormControl(drugBrandName, [
        Validators.required,
        
      ]),
      drugName: new FormControl(drugName, [
        Validators.required,
       
      ]),
      drugGenericName: new FormControl(drugGenericName, [
        Validators.required,
        
      ]),
      drugForm: new FormControl(drugForm, [
        Validators.required,
       
      ]),
    });
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }
  saveMedicationDetails() {
    // Gathering data
    const patientVisitId = 1234;
    const drugId = this.form.value.drugId;
    const drugName = this.form.value.drugName;
    const drugBrandName = this.form.value.drugBrandName;
    const drugGenericName = this.form.value.drugGenericName;
    const drugForm = this.form.value.drugForm;
    const updatedBy='robert@ctgeneral.com';
    const insertedDate=new Date();
    const id = this.form.value.id;

    // Create Ob
    const ob = new MedicationDetails(
      patientVisitId,
      drugId,
      drugName,
      drugGenericName,
      drugBrandName,
      drugForm,
      insertedDate,
      updatedBy,
       id
    );

    // Send to service
   this.medicalInformationService.addMedicationDetails(ob);
   alert("Record Added");
  }
}
