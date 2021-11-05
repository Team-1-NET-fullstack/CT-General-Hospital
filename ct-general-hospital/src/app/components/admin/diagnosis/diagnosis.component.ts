import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DiagnosisMasterService } from 'src/app/core/services/diagnosis-master/diagnosis-master.service';
import { DiagnosisMaster } from 'src/app/shared/models/diagnosismaster.model';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  diagnosis!: DiagnosisMaster;

  form: FormGroup = new FormGroup({});
  form1: FormGroup = new FormGroup({});
  searchterm: string = '';
  objId:string='';

  constructor(private masterService: DiagnosisMasterService,private formBuilder: FormBuilder) {
    this.form = new FormGroup({
      Name: new FormControl(null),
      Description: new FormControl(null)
    });
    this.form1 = new FormGroup({
      searchterm:new FormControl(null),
      Name1: new FormControl(null),
      Description1: new FormControl(null)
      
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    {
      let name:string=this.form.value.Name;
      let description: string = this.form.value.Description;
      var diagnosis = new DiagnosisMaster('',name,description);
      if (this.form.valid ) {
        this.masterService.createDiagnosis(diagnosis);
      }
    }
  }
  onSearch() {
    
    this.masterService.getAllDiagnosisbyDesc(this.form1.value.searchterm).subscribe((response) => {
      this.objId = response.Id;
      this.form1.controls.Name1.setValue(response.Name);
      this.form1.controls.Description1.setValue(response.Description);
      console.log(response);
    });
  }
  onEdit() {
    {
       let name1: string = this.form1.value.Name1;
      let description1: string = this.form1.value.Description1;
      
      var allergy1 = new DiagnosisMaster(this.objId,name1,description1);
      if (this.form1.valid) {
        this.masterService.updateDiagnosis(allergy1);
      }
    }

}
}
