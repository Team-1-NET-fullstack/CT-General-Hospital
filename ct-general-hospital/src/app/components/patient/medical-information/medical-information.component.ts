import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DiagnosisMasterService } from 'src/app/core/services/diagnosis-master/diagnosis-master.service';
import { DiagnosisDetails } from 'src/app/shared/models/diagnosis-details.model';

@Component({
  selector: 'app-medical-information',
  templateUrl: './medical-information.component.html',
  styleUrls: ['./medical-information.component.css'],
})
export class MedicalInformationComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(diagnosisMasterService:DiagnosisMasterService,
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {}
  // const ob = new DiagnosisDetails(
  //  public  patientVisitId: number,
  //  public  diagnosisCode: string,
  //  public diagnosisDescription: string;
  //  public  isDepricated: boolean;
  //  public insertedDate: Date;
  //  public updatedBy: string
  // );
  // SaveVitalDetails()
  // {
  //   this.diagnosisMasterService.createDiagnosis(this.patientVisitId)
  //       .subscribe((data: any) => {
  //       this.dummyObj = data[0];

  //       this.xTitle = this.dummyObj.title;
  //  // diagnosisMasterService.
    
  // }
//   SaveDiagnosisDetails()
//   {

//   }
//   SaveProcedureDetails()
//   {
    
//   }
//   SaveMedicationDetails()
//   {

//   }


// }
}