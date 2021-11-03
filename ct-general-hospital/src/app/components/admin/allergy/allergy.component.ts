import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AllergyMasterService } from 'src/app/core/services/allergy-master/allergy-master.service';
import { AllergyMaster } from 'src/app/shared/models/allergymaster.model';
@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.css']
})
export class AllergyComponent implements OnInit {
  allergy!: AllergyMaster;
  checked = false;

  form: FormGroup = new FormGroup({});
  form1: FormGroup = new FormGroup({});
  search: string = '';

  constructor(private masterService: AllergyMasterService) {
    this.form = new FormGroup({
      
      Description: new FormControl(null),
      Fatal: new FormControl(null),
    });
    this.form1 = new FormGroup({
      
      Description1: new FormControl(null),
      Fatal1: new FormControl(null),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    {
      let name: string = this.form.value.Name;
      let description: string = this.form.value.Description;
      let fatal: string = this.form.value.fatal;
      var allergy = new AllergyMaster(description, fatal);
      if (this.form.valid) {
        this.masterService.createAllergy(allergy);
      }
    }
  }
  OnSearch() {
    this.masterService.getAllAllergybyDesc(this.search).subscribe();
  }
  onEdit() {
    {
      
      let description: string = this.form1.value.Description1;
      let fatal1: string = this.form1.value.fatal1;
      var allergy1 = new AllergyMaster(description, fatal1);
      if (this.form1.valid) {
        this.masterService.createAllergy(allergy1);
      }
    }

}
}
