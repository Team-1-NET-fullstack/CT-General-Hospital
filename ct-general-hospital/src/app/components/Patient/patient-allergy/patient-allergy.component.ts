import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-patient-allergy',
  templateUrl: './patient-allergy.component.html',
  styleUrls: ['./patient-allergy.component.css']
})
export class PatientAllergyComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  clinicalinfo = new FormControl('', [Validators.required]);
  allergydescription=new FormControl('',[Validators.required]);
  

  constructor() { }

  ngOnInit(): void {
  }

}
