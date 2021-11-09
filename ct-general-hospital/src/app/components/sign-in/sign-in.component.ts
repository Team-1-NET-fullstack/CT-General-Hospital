import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';
import { AlertService } from 'src/app/alert.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Login } from 'src/app/shared/models/login.model';
import { User } from 'src/app/shared/models/user.model';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  roleUpdated = new BehaviorSubject<string | null>(null);
  emailUpdated = new BehaviorSubject<string | null>(null);
  userIdUpdated = new BehaviorSubject<string | null>(null);
  employeeIdUpdated = new BehaviorSubject<string | null>(null);
  firstNameUpdated= new BehaviorSubject<string | null>(null);
  signin: FormGroup = new FormGroup({});
  //signin!: FormGroup;
  dataModel: Login | null = null;
  hide = true;
  loading = false;
  submitted = false;
  UserType: any;

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private SpinnerService: NgxSpinnerService,
    public dialog: MatDialog
  ) {
    // this.authService.roleUpdated.next(localStorage.getItem('ROLEID'));
    // this.roleUpdated.next(localStorage.getItem('ROLEID'));
    this.emailUpdated.next(localStorage.getItem('EMAIL'));
    this.userIdUpdated.next(localStorage.getItem('USERID'));
    this.employeeIdUpdated.next(localStorage.getItem('EMPLOYEEID'));
    this.firstNameUpdated.next(localStorage.getItem('FIRSTNAME'));
    this.SpinnerService.hide();
  }

  ngOnInit(): void {
    this.signin = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      id: new FormControl(),
      token: new FormControl(),
    });
    this.dataModel = new Login(
      this.signin.value.id,
      this.signin.value.email,
      this.signin.value.password,
      this.signin.value.token
    );
  }
  
  get f() {
    return this.signin.controls;
  }
  getErrorMessage() {
    if (this.signin.controls['email'].hasError('required')) {
      return 'This field cannot be empty';
    } else {
      return this.signin ? 'please select another username' : '';
    }
  }
  getErrorMessagePassword() {
    if (this.signin.controls['password'].hasError('required')) {
      return 'This field cannot be empty';
      ('');
    }
    return this.signin ? 'Not a valid password' : '';
  }
  onLogin() {
    //console.log(this.signin.controls);

    this.submitted = true;
    // reset alerts on submit
    this.alertService.clear();
    // stop here if form is invalid
    if (this.signin.invalid) {
      return;
    }
    this.loading = true;
    const unSuccessfullAttempts = 3;
    console.log(this.signin.value);
    this.SpinnerService.show();
    this.authService.login(this.signin.value).subscribe(
      (user: any) => {
        this.SpinnerService.hide();
        localStorage.setItem('TOKEN', user.token);
        localStorage.setItem('ROLEID', user.roleId);
        console.log(user.roleId);
        this.roleUpdated.next(user.roleId);
        localStorage.setItem('EMAIL', user.email);
        this.emailUpdated.next(user.email);
        localStorage.setItem('USERID', user.userId);
        this.userIdUpdated.next(user.userId);
        localStorage.setItem('EMPLOYEEID', user.employeeId);
        this.employeeIdUpdated.next(user.employeeId);
        this.loading = false;

        this.SpinnerService.hide();
        if (user.isSuccess) {
          this.alertService.success(user.message, true);
          this.openSnackBar('Login Successful!');

          console.log('After signing roleId:' + user.roleId);
          switch (user.roleId) {
            case 1:
              this.router.navigate(['/admin/dashboard']);

              break;

            case 2:
              this.router.navigate(['/doctor/dashboard']);
              break;

            case 3:
              this.router.navigate(['/nurse/dashboard']);

              break;

            case 4:
              this.router.navigate(['/patient/dashboard']);

              break;

            default:
              this.router.navigate(['/page-not-found']);

              break;
          }
        } else if (user.noOfAttempts > 0 && user.noOfAttempts <= 2) {
          this.alertService.error(
            unSuccessfullAttempts -
              user.noOfAttempts +
              ' ' +
              'Attempts are Remaining',
            true
          );
          //alert(unSuccessfullAttempts - data.noOfAttempts +" "+'login attempts remaining');
        } else {
          if (user.noOfAttempts === 3) {
            this.alertService.error(user.message);
            //alert("Your account has been locked. Please contact the hospital administrator or call helpdesk on 123456 for more information.");
          } else {
            this.alertService.error(
              'Invalid Email: Please enter your registered email address',
              true
            );
            //alert("Invalid Email: Please enter your registered email address");
          }
          //this.alertService.error('Your account has been locked. Please contact the hospital administrator or call helpdesk on 123456 for more information.', true);
        }
      },
      (error: any) => {
        alert('500 Internal Server Error');
        this.SpinnerService.hide();
        this.loading = false;
      }
    );
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      // horizontalPosition: 'right',

      // verticalPosition: 'top',

      duration: 2000,
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(ForgotPasswordComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
  // onForgot() {
  //   this.router.navigate(['ForgotPassword']);
  // }

  // onclick(user: any) {
  //   if (user === 'Admin') {
  //     this.UserType = 'admin';
  //   }
  //   else if (user === 'Doctor') {
  //     this.UserType = 'hospital';
  //   }
  //   else {
  //     this.UserType = 'patient';
  //   }
  // }
}
