import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'src/app/alert.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { UserModel } from 'src/app/shared/models/UserModel.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  registrationForm: FormGroup = new FormGroup({});
  dataModel: UserModel | null = null;
  loading = false;
  submitted = false;
  roles: any = [];
  tomorrow = new Date();
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService, 
    private authenticationService: AuthService,
    private SpinnerService: NgxSpinnerService,
    private _snackBar: MatSnackBar
  ) {

    // redirect to home if already logged in
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      title: new FormControl("Mr.", [Validators.required]),
      firstName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: ['Password@123', [Validators.required, Validators.minLength(8), Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
      phone: new FormControl(null),
      dob: new FormControl(null, [Validators.required]),
      roleId: new FormControl(null, [Validators.required]),
      employeeId: new FormControl(null),
    });

    this.getAllRoles();
  }

  get f() {
    return this.registrationForm.controls;
  }
  getAllRoles() {
    this.authenticationService.getAllRoles().subscribe((roles: any) => {
      this.roles =roles.filter(function(role:any)
      {
       return role.id!=4 //remove patient
      });  
     
    });
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      // horizontalPosition: 'right',
      // verticalPosition: 'top',
      duration: 2000,
    });
  }
  onSubmit() {
   // console.log(this.registrationForm.controls);
   //this.SpinnerService.show();
    this.submitted = true;
    this.alertService.clear();
    if (this.registrationForm.invalid) {
        this.alertService.success("The form contains one or more missing values!", true);
        this.SpinnerService.hide();
      return;
    }
    this.loading = true;
    //this.registrationForm.value.dob = this.datePipe.transform(this.registrationForm.value.dob, "dd-MM-yyyy");

    this.dataModel = new UserModel(
      this.registrationForm.value.title,
      this.registrationForm.value.firstName,
      this.registrationForm.value.lastName,
      this.registrationForm.value.email,
      this.registrationForm.value.password,
      this.registrationForm.value.phone,
      this.registrationForm.value.dob,
      this.registrationForm.value.roleId,
      this.registrationForm.value.employeeId,
      
    );
    console.log(this.dataModel);
    this.userService.registerUser(this.dataModel).subscribe(
      (data: any) => {
        if (data.isSuccess === true) {
          this.SpinnerService.hide();
          this.alertService.success(data.message, true);
          this.router.navigate(['/admin/dashboard']);
          this.openSnackBar('Employee Added Successfully');
        }
        else {
          this.SpinnerService.hide();
          this.alertService.success(data.message, true);
          this.openSnackBar('Emplyoyee Registration is Failed');
        }
        // this.alertService.success('Registration successful', true);
        // this.router.navigate(['/admin/dashboard']);
      },
     
    );
  
  }
}
