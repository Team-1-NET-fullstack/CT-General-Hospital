import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MedicalInformationService } from 'src/app/core/services/medical-information.service';
import { VitalSigns } from 'src/app/shared/models/vital-signs.model';

@Component({
  selector: 'app-vital-signs',
  templateUrl: './vital-signs.component.html',
  styleUrls: ['./vital-signs.component.css'],
})
export class VitalSignsComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private medicalInformationService: MedicalInformationService) {}

  ngOnInit(): void {
    let height = null;
    let weight = null;
    let bodyTemparature = null;
    let respirationRate = null;
    let bloodPressure = null;

    this.form = new FormGroup({
      height: new FormControl(height, [
        Validators.required,
        Validators.maxLength(3),
      ]),
      weight: new FormControl(weight, [
        Validators.required,
        Validators.maxLength(3),
      ]),
      bodyTemparature: new FormControl(bodyTemparature, [
        Validators.required,
        Validators.maxLength(3),
      ]),
      respirationRate: new FormControl(respirationRate, [
        Validators.required,
        Validators.maxLength(3),
      ]),
      bloodPressure: new FormControl(bloodPressure, [
        Validators.required,
        Validators.maxLength(7),
      ]),
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };

  saveVitals() {
    const patientVisitId = 1234;
    const height = this.form.value.height;
    const weight = this.form.value.weight;
    const bodyTemparature = this.form.value.bodyTemparature;
    const respirationRate = this.form.value.respirationRate;
    const bloodPressure = this.form.value.bloodPressure;
    const updatedBy = 'robert@ctgeneral.com';
    const insertedDate = new Date();
    const id = this.form.value.id;

    const ob = new VitalSigns(
      patientVisitId,
      height,
      weight,
      bodyTemparature,
      respirationRate,
      bloodPressure,
      insertedDate,
      updatedBy,
      id
    );

    this.medicalInformationService.addVitals(ob);
    alert('Record Added');
  }
}
