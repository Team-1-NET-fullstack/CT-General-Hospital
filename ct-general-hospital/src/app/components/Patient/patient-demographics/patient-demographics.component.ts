import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { zip } from 'rxjs';
import { PatientDemographicsService } from 'src/app/core/services/patient-demographics.service';
import { DemographicsDetails } from 'src/app/shared/models/patient-demographics.model';

@Component({
  selector: 'app-patient-demographics',
  templateUrl: './patient-demographics.component.html',
  styleUrls: ['./patient-demographics.component.css'],
})
export class PatientDemographicsComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  demogrp: DemographicsDetails = new DemographicsDetails();

  constructor(
    private patientdemographicsservice: PatientDemographicsService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      title: new FormControl('Mr', [Validators.required]),
      firstname: new FormControl(null, [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(2),
        Validators.pattern('[A-Za-z]+'),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(2),
        Validators.pattern('[A-Za-z]+'),
      ]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      race: new FormControl('', [
        Validators.required,

        Validators.minLength(2),
        Validators.pattern('[A-Za-z]+'),
      ]),
      language: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[A-Za-z]+'),
      ]),

      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(4),
      ]),

      pincode: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('[0-9]+'),
      ]),
      countrycode: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[0-9]+'),
      ]),
      state: new FormControl('', [
        Validators.maxLength(20),
        Validators.required,
        Validators.pattern('[A-Za-z]+'),
      ]),
      contact1: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('[0-9]+'),
      ]),
      emergencycontact: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('[0-9]+'),
      ]),

      nomineefirstname: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(2),
        Validators.pattern('[A-Za-z]+'),
      ]),
      nomineelastname: new FormControl('', [
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(2),
        Validators.pattern('[A-Za-z]+'),
      ]),
      namineeemail: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      contact2: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('[0-9]+'),
      ]),
      relationship: new FormControl('', [Validators.required]),
      nomineeaddress: new FormControl('', [Validators.required]),
      access: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  saveDemographicsDetails() {
    if (this.form.valid) {
      this.demogrp.title = this.form.value.title;
      this.demogrp.firstName = this.form.value.firstname;
      this.demogrp.lastName = this.form.value.lastname;
      this.demogrp.DOB = this.form.value.dob;
      this.demogrp.gender = this.form.value.gender;
      this.demogrp.race = this.form.value.race;
      this.demogrp.language = this.form.value.language;
      this.demogrp.email = this.form.value.email;
      this.demogrp.address = this.form.value.address;
      this.demogrp.pincode = this.form.value.pincode;
      this.demogrp.countrycode = this.form.value.countrycode;
      this.demogrp.state = this.form.value.state;
      this.demogrp.contactNumber = this.form.value.contact1;
      this.demogrp.emergencyContact = this.form.value.emergencycontact;
      this.demogrp.nomineeFirstName = this.form.value.nomineefirstname;
      this.demogrp.nomineeLastName = this.form.value.nomineelastname;
      this.demogrp.nomineeEmail = this.form.value.namineeemail;
      this.demogrp.relationship = this.form.value.relationship;
      this.demogrp.nomineeAddress = this.form.value.nomineeaddress;
      this.demogrp.access = this.form.value.access;
      this.patientdemographicsservice.addDemographics(this.demogrp);
    }
    // console.log(JSON.stringify(this.demogrp));
  }
}
