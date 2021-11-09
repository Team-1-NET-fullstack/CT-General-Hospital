import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AllergyMasterService } from 'src/app/core/services/allergy-master/allergy-master.service';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/scroll/scroll-strategy';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-patient-allergy',
  templateUrl: './patient-allergy.component.html',
  styleUrls: ['./patient-allergy.component.css'],
})
export class PatientAllergyComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  patientId!: number;

  clinicalinfo = new FormControl('', [Validators.required]);
  allergydescription = new FormControl('', [Validators.required]);

  allergyId = new FormControl();
  allergyIdList: string[] = ['Al01', 'Al02', 'Al03', 'Al04'];
  allergyType = new FormControl();
  allergyTypeList: string[] = [
    'Drug Allergy',
    'Food Allergy',
    'Insect Allergy',
    'Latex Allergy',
    'Mold Allergy',
    'Pet Allergy',
    'Pollen Allergy',
  ];
  allergyName = new FormControl();
  allergyNameList: string[] = [
    'Asthma',
    'Atopic Eczema (Dermatitis)',
    'Drug Allergy',
    'Food Allergy and Food Intolerance',
    'Rhinitis',
    'Skin Allergy',
  ];
  filteredOptions: Observable<string[]> | undefined;

  constructor(
    private allergyMasterService: AllergyMasterService,
    private router: ActivatedRoute
  ) {
    // this.getAllergyDetails(this.patientId);
  }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.getAllergyDetails(this.patientId);
      //  debugger;
    });

    this.filteredOptions = this.allergyId.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allergyIdList.filter((allergyIdList) =>
      allergyIdList.toLowerCase().includes(filterValue)
    );
  }
  getAllergyDetails(patientId: number) {
    console.log('Calling abcd');
    this.allergyMasterService.getAllergyById(patientId).subscribe((data) => {
      // debugger
      console.log(data);
    });
  }
}
