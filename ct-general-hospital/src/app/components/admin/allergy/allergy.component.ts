import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AllergyMasterService } from 'src/app/core/services/allergy-master/allergy-master.service';
import { AllergyMaster } from 'src/app/shared/models/allergymaster.model';
@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.css']
})
export class AllergyComponent implements OnInit {
  allergy!: AllergyMaster;

  form: FormGroup = new FormGroup({});
  form1: FormGroup = new FormGroup({});
  searchterm: string = '';

  constructor(private masterService: AllergyMasterService,private formBuilder: FormBuilder) {
    this.form = new FormGroup({
      Description: new FormControl(null),
      Fatal: new FormControl(null),
    });
    this.form1 = new FormGroup({
      searchterm:new FormControl(null),
      Description1: new FormControl(null),
      Fatal1: new FormControl(null),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    {
      
      let description: string = this.form.value.Description;
      let fatal: boolean = this.form.value.Fatal;
      var allergy = new AllergyMaster(description, fatal);
      if (this.form.valid ) {
        this.masterService.createAllergy(allergy);
      }
    }
  }
  onSearch() {
    
    debugger;
    this.masterService.getAllAllergybyDesc(this.form1.value.searchterm).subscribe((response) => {
      debugger;
      this.form1.value.Description1= response.Description;
      this.form1.value.Fatal1= response.IsFatal;
    });
  }
  onEdit() {
    {
      
      let description: string = this.form1.value.Description1;
      let fatal1: boolean = this.form1.value.fatal1;
      var allergy1 = new AllergyMaster(description, fatal1);
      if (this.form1.valid) {
        this.masterService.createAllergy(allergy1);
      }
    }

}
}
