import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { MedicalInformationService } from 'src/app/core/services/medical-information.service';
import { PatientDemographicsService } from 'src/app/core/services/patient-demographics.service';
import { DemographicsDetails } from 'src/app/shared/models/patient-demographics.model';
import { PatientDetails } from 'src/app/shared/models/patient-details.model';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
})
export class PatientDetailsComponent implements OnInit {
  xTitle: string = '';
  xFirstName: string = '';
  xLastName: string = '';
  xDob = Date;
  xGender: string = '';
  xRace: string = '';
  xEthinicity: string = '';
  xLanguagesKnown: string = '';
  xEmailId: string = '';
  xTelePhoneNo: number = 129;
  xAddress: string = '';
  xAllergies: string = '';

  dummyObj: any;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  form: FormGroup = new FormGroup({});
  patientId: number = 0;
  demographicsDetails: DemographicsDetails = new DemographicsDetails();
  constructor(
    private medicalInformationService: MedicalInformationService,
    private patientDemographicsService: PatientDemographicsService,
    private router: ActivatedRoute
  ) {
    this.patientId = Number(this.router.snapshot.paramMap.get('patientId'));
  }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      //  debugger;
      console.log('this is id from patient details:-  ' + params['patientId']);
    });

    this.getPatientDetails();
    let title = null;
    console.log(this.demographicsDetails);
    //let firstName = null;

    let firstName = this.demographicsDetails.firstName;
    let lastName = null;
    let dateOfBirth = null;
    let gender = null;
    let race = null;
    let ethinicity = null;
    let languagesKnown = null;
    let emailId = null;
    let telePhoneNo = null;
    let address = null;
    let allergies = null;

    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),

      firstName: new FormControl(firstName, [
        Validators.required,
        Validators.maxLength(60),
      ]),
      lastName: new FormControl(lastName, [Validators.required]),
      dateOfBirth: new FormControl(dateOfBirth, [Validators.required]),
      gender: new FormControl(gender, [Validators.required]),
      race: new FormControl(race, [Validators.required]),
      ethinicity: new FormControl(ethinicity, [Validators.required]),
      languagesKnown: new FormControl(languagesKnown, [Validators.required]),
      //  emailId: new FormControl(emailId, [Validators.required]),
      telePhoneNo: new FormControl(telePhoneNo, [Validators.required]),
      address: new FormControl(address, [Validators.required]),
      allergies: new FormControl(allergies, [Validators.required]),
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
  getPatientDetails() {
    this.patientDemographicsService
      .GetDemographics(this.patientId)
      .subscribe((data: any) => {
        this.dummyObj = data[0];

        this.xTitle = this.dummyObj.title;
        this.xFirstName = this.dummyObj.FirstName;
        this.xLastName = this.dummyObj.LastName;
        this.xDob = this.dummyObj.Dob;
        this.xGender = this.dummyObj.Gender;
        this.xRace = this.dummyObj.Race;
        this.xEthinicity = this.dummyObj.Ethinicity;
        this.xLanguagesKnown = this.dummyObj.Languages;
        this.xEmailId = this.dummyObj.Email;
        this.xTelePhoneNo = this.dummyObj.ContactNumber;
        this.xAddress = this.dummyObj.Address;

        console.log('hello', this.dummyObj.FirstName);
      });
  }

  savePatientDetails() {
    // Gathering data
    const patientVisitId = 1234;
    const title = this.form.value.title;
    const firstName = this.form.value.firstName;
    const lastName = this.form.value.lastName;
    const dateOfBirth = this.form.value.dateOfBirth;
    const gender = this.form.value.gender;
    const race = this.form.value.race;
    const ethinicity = this.form.value.ethinicity;
    const languagesKnown = this.form.value.languagesKnown;
    const emailId = this.form.value.emailId;
    const telePhoneNo = this.form.value.telePhoneNo;
    const address = this.form.value.address;
    const allergies = this.form.value.allergies;
    const updatedBy = 'robert@ctgeneral.com';
    const insertedDate = new Date();
    const id = this.form.value.id;

    // Create Ob
    const ob = new PatientDetails(
      patientVisitId,
      title,
      firstName,
      lastName,
      dateOfBirth,
      gender,
      race,
      ethinicity,
      languagesKnown,
      emailId,
      telePhoneNo,
      address,
      allergies,
      insertedDate,
      updatedBy,
      id
    );

    // Send to service
    this.medicalInformationService.addPatientDetails(ob);
    alert('Record Added');
  }
}
