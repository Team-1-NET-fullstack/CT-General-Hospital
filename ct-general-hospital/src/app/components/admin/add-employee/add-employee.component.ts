import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
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
