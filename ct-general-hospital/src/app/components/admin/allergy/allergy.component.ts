import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AllergyMasterService } from 'src/app/core/services/allergy-master/allergy-master.service';
import { AllergyMaster } from 'src/app/shared/models/allergymaster.model';
@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.css'],
})
export class AllergyComponent implements OnInit {
  allergy!: AllergyMaster;

  form: FormGroup = new FormGroup({});
  form1: FormGroup = new FormGroup({});
  searchterm: string = '';
  objId: string = '';

  constructor(
    private masterService: AllergyMasterService
  ) {
    this.form = new FormGroup({
      Description: new FormControl(null),
      Fatal: new FormControl(null),
    });
    this.form1 = new FormGroup({
      searchterm: new FormControl(null),
      ObjectId: new FormControl(null),
      Description1: new FormControl(null),
      Fatal1: new FormControl(null),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    {
      let description: string = this.form.value.Description;
      let fatal: boolean = this.form.value.Fatal;
      var allergy = new AllergyMaster('', description, fatal);
      if (this.form.valid) {
        this.masterService.createAllergy(allergy);
      }
    }
  }
  onSearch() {
    this.masterService
      .getAllAllergybyDesc(this.form1.value.searchterm)
      .subscribe((response) => {
        
        this.objId = response.Id;
        this.form1.controls.Description1.setValue(response.Description);
        this.form1.controls.Fatal1.setValue(response.IsFatal);
      });
  }
  onEdit() {
    {
      let description1: string = this.form1.value.Description1;
      let fatal1: boolean = this.form1.value.Fatal1;
      var allergy1 = new AllergyMaster(
        this.objId,
        description1,
        fatal1
      );
      if (this.form1.valid) {
        this.masterService.updateAllergy(allergy1);
      }
    }
  }
}
