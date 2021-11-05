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
  searchterm: string = '';
  objId: string = '';

  constructor(private masterService: ProcedureMasterService) {
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
      let deprecated: boolean = this.form.value.Deprecated;
      var procedure = new ProcedureMaster(
        '',
        name,
        description,
        deprecated
      );
      if (this.form.valid) {
        this.masterService.createProcedure(procedure);
      }
    }
  }
  onSearch() {
    this.masterService
      .getAllProcedurebyDesc(this.form1.value.searchterm)
      .subscribe((response) => {
        this.objId = response.Id;
        this.form1.controls.Name1.setValue(response.Name);
        this.form1.controls.Description1.setValue(response.Description);
        this.form1.controls.Deprecated1.setValue(response.IsDeprecated);
        console.log(response);
      });
  }
  onEdit() {
    {
      let objectId: string = this.form1.value.ObjectId;
      let name: string = this.form1.value.Name1;
      let description: string = this.form1.value.Description1;
      let deprecated: boolean = this.form1.value.Deprecated1;
      var procedure = new ProcedureMaster(
        this.objId,
        name,
        description,
        deprecated
      );
      if (this.form1.valid) {
        this.masterService.updateProcedure(procedure);
      }
    }
  }
}
