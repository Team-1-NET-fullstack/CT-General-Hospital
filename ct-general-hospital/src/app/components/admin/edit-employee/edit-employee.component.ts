import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  formVar: FormGroup;
  constructor(private fb: FormBuilder) {this.formVar = this.fb.group({
    fname: '',
    lname: ''
  }); }

  ngOnInit(): void {
  }
  onSubmit() {
    // console.log(this.formVar.value);
  }


}
