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
  // procedureCode = new FormControl();
  // procedureCodeList: string[] = ['P00','P002','P003','P003','p004'];
  procedureDescription = new FormControl();
  procedureDescriptionList: string[] = [
    'Bypass Cerebral Ventricle to Subgaleal Space with Autologous Tissue Substitute',
    'Open Approach',
  ];

  form: FormGroup = new FormGroup({});

  constructor(private medicalInformationService: MedicalInformationService) {}

  ngOnInit(): void {
    let procedureId = null;
    let procedureDescription = null;
    let isDepricated = false;

    this.form = new FormGroup({
      procedureId: new FormControl(procedureId),
      procedureDescription: new FormControl(procedureDescription),
      isDepricated: new FormControl(isDepricated),
    });
  }

  saveProcedureDetails() {
    // Gathering data
    const patientVisitId = 1234;
    const procedureId = this.form.value.procedureId;
    const procedureDescription = this.form.value.procedureDescription;
    const isDepricated = this.form.value.isDepricated;
    const updatedBy = 'robert@ctgeneral.com';
    const insertedDate = new Date();
    const id = this.form.value.id;

    // Create Ob
    const ob = new ProcedureDetails(
      patientVisitId,
      procedureId,
      procedureDescription,
      isDepricated,
      insertedDate,
      updatedBy,
      id
    );

    // Send to service
    this.medicalInformationService.addProcedureDetails(ob);
    alert('Record Added');
  }
}
