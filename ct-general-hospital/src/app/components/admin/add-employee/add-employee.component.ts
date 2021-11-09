import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EditEmployeeService } from 'src/app/core/services/edit-employee/edit-employee.service';
import { EditEmployee } from 'src/app/shared/models/edit-employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employee!:EditEmployee;
    ;
  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: new FormControl('Mr', [Validators.required]),
      firstname: new FormControl(null, [
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(2),
        Validators.pattern('[A-Za-z]+'),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(2),
        Validators.pattern('[A-Za-z]+'),
      ]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),

      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(4),
      ]),

      pincode: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('[0-9]+'),
      ]),
      countrycode: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[0-9]+'),
      ]),
      contact1: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern('[0-9]+'),
      ]),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {      
      this.employee.title = this.form.value.title;
      this.employee.firstName = this.form.value.firstname;
      this.employee.lastName = this.form.value.lastname;
      this.employee.dob = this.form.value.dob;
      this.employee.gender = this.form.value.gender;
      this.employee.emailId = this.form.value.email;
      this.employee.address = this.form.value.address;
      this.employee.pincode = this.form.value.pincode;
      this.employee.role = this.form.value.role;
      this.employee.state = this.form.value.state;
      this.employee.contactNumber = this.form.value.contact1;
    }
    console.log(JSON.stringify(this.employee));
  }
  }
