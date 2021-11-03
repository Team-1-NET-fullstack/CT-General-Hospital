import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  search: string = '';

  constructor(private masterService: DiagnosisMasterService) {
    this.form = new FormGroup({
      Name: new FormControl(null),
      Description: new FormControl(null)
    });
    this.form1 = new FormGroup({
      Name1: new FormControl(null),
      Description1: new FormControl(null)
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    {
      let name: string = this.form.value.Name;
      let description: string = this.form.value.Description;
      var diagnosis = new DiagnosisMaster(name, description);
      if (this.form.valid) {
        this.masterService.createDiagnosis(diagnosis);
      }
    }
  }
  OnSearch() {
    this.masterService.getAllDiagnosisbyDesc(this.search).subscribe();
  }
  onEdit() {
    {
      let name: string = this.form1.value.Name1;
      let description: string = this.form1.value.Description1;
      var procedures1 = new DiagnosisMaster(name, description);
      if (this.form1.valid) {
        this.masterService.createDiagnosis(procedures1);
      }
    }
  }
}
