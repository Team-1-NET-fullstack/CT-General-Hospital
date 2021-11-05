import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MedicationMasterService } from 'src/app/core/services/medication-master/medication-master.service';
import { MedicationMaster } from 'src/app/shared/models/medicationmaster.model';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css'],
})
export class MedicationComponent implements OnInit {
  medication!: MedicationMaster;
  checked = false;
  checked1 = false;

  form: FormGroup = new FormGroup({});
  form1: FormGroup = new FormGroup({});
  searchterm: string = '';
  hiddenMedicationId: string = '';

  constructor(private masterService: MedicationMasterService) {
    this.form = new FormGroup({
      Name: new FormControl(null),
      Description: new FormControl(null),
      Dosage: new FormControl(null),
      Deprecated: new FormControl(null),
    });
    this.form1 = new FormGroup({
      searchterm: new FormControl(null),
      ObjectId: new FormControl(null),
      Name1: new FormControl(null),
      Description1: new FormControl(null),
      Dosage1: new FormControl(null),
      Deprecated1: new FormControl(null),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    {
      let name: string = this.form.value.Name;
      let description: string = this.form.value.Description;
      let dosage: string = this.form.value.Dosage;
      let deprecated: boolean = this.form.value.Deprecated;
      var medication = new MedicationMaster(
        '',
        name,
        description,
        dosage,
        deprecated
      );
      if (this.form.valid) {
        this.masterService.createMedication(medication);
      }
    }
  }
  onSearch() {
    this.masterService
      .getAllMedicationbyDesc(this.form1.value.searchterm)
      .subscribe((response) => {
        this.form1.controls.ObjectId.setValue(response.Id);
        this.form1.controls.Name1.setValue(response.Name);
        this.form1.controls.Description1.setValue(response.Description);
        this.form1.controls.Dosage1.setValue(response.Dosage);
        this.form1.controls.Deprecated1.setValue(response.isDeprecated);
        console.log(response);
      });
  }
  onEdit() {
    {
      let objectId: string = this.form1.value.ObjectId;
      let name: string = this.form.value.Name1;
      let description: string = this.form.value.Description1;
      let dosage: string = this.form.value.Dosage1;
      let deprecated: boolean = this.form.value.Deprecated1;
      var medication = new MedicationMaster(
        '',
        name,
        description,
        dosage,
        deprecated
      );
      if (this.form1.valid) {
        this.masterService.updateMedication(objectId, medication);
      }
    }
  }
}
