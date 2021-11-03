import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MedicationMasterService } from 'src/app/core/services/medication-master/medication-master.service';
import { MedicationMaster } from 'src/app/shared/models/medicationmaster.model';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {
  medication!: MedicationMaster;
  checked = false;
  checked1 = false;

  form: FormGroup = new FormGroup({});
  form1: FormGroup = new FormGroup({});
  search: string = '';

  constructor(private masterService: MedicationMasterService) {
    this.form = new FormGroup({
      Name: new FormControl(null),
      Description: new FormControl(null),
      Dosage: new FormControl(null),
      Fatal: new FormControl(null),
    });
    this.form1 = new FormGroup({
      Name1: new FormControl(null),
      Description1: new FormControl(null),
      Dosage1: new FormControl(null),
      Fatal1: new FormControl(null),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    {
      let name: string = this.form.value.Name;
      let description: string = this.form.value.Description;
      let dosage: string = this.form.value.Dosage;
      let deprecated: string = this.form.value.Deprecated;
      var medication = new MedicationMaster(name,description, dosage,deprecated);
      if (this.form.valid) {
        this.masterService.createMedication(medication);
      }
    }
  }
  OnSearch() {
    this.masterService.getAllMedicationbyDesc(this.search).subscribe();
  }
  onEdit() {
    {
      let name1: string = this.form.value.Name;
      let description1: string = this.form.value.Description;
      let dosage1: string = this.form.value.Dosage;
      let deprecated1: string = this.form.value.Deprecated;
      var medication1 = new MedicationMaster(name1,description1, dosage1,deprecated1);
      if (this.form.valid) {
        this.masterService.createMedication(medication1);
    }
  }
  }
}
