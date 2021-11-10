import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'src/app/core/services/alert.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  email: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService,
    private SpinnerService: NgxSpinnerService,
    private _snackBar: MatSnackBar
  ) {
    this.SpinnerService.hide(); 
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }
  getErrorMessage() {
    if (this.form.controls['email'].hasError('required')) {
      return 'This field cannot be empty';
    } else {
      return this.form ? 'Invalid email' : '';
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      // horizontalPosition: 'right',
      // verticalPosition: 'top',
      duration: 2000,
    });
  }
  onSubmit() {
    this.alertService.clear();
    if (this.form.invalid) {
      return;
    }
    this.SpinnerService.show();
    this.authService
      .forgotPassword(this.form.value.email)
      .subscribe((result: any) => {
        //console.log(result);
        this.SpinnerService.hide();
        if (result.isSuccess) {
          
          this.alertService.success(
            result.message,
            true
          );
           
          this.openSnackBar('Your OneTime Password is sent to Mail.Please Check Your Mail');  
          this.router.navigate(['/signin']);   
        }
        else {
          this.alertService.error(result.message, true); 
          this.SpinnerService.hide();   
          this.openSnackBar('Email is not sent');      
        }
          
      });
  }

}
