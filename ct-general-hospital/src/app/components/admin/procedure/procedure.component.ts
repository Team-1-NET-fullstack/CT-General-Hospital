import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProcedureMasterService } from 'src/app/core/services/procedure-master/procedure-master.service';
import { ProcedureMaster } from 'src/app/shared/models/proceduremaster.model';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css'],
})
export class ProcedureComponent implements OnInit {
  procedure!: ProcedureMaster;

  form: FormGroup = new FormGroup({});
  form1: FormGroup = new FormGroup({});
  search: string = '';

  constructor(private masterService: ProcedureMasterService) {
    this.form = new FormGroup({
      Name: new FormControl(null),
      Description: new FormControl(null),
      Deprecated: new FormControl(null),
    });
    this.form1 = new FormGroup({
      Name1: new FormControl(null),
      Description1: new FormControl(null),
      Deprecated1: new FormControl(null),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    {
      let name: string = this.form.value.Name;
      let description: string = this.form.value.Description;
      let deprecated: string = this.form.value.Deprecated;
      var procedures = new ProcedureMaster(name, description, deprecated);
      if (this.form.valid) {
        this.masterService.createProcedure(procedures);
      }
    }
  }
  OnSearch() {
    this.masterService.getAllProcedurebyDesc(this.search).subscribe();
    
  }
  onEdit() {
    {
      let name: string = this.form1.value.Name1;
      let description: string = this.form1.value.Description1;
      let deprecated: string = this.form1.value.Deprecated1;
      var procedures1 = new ProcedureMaster(name, description, deprecated);
      if (this.form1.valid) {
        this.masterService.createProcedure(procedures1);
      }
    }
  }
}
