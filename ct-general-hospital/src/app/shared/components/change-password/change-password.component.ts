import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'src/app/alert.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { passwordMatchValidator } from 'src/app/CustomValidator/password.validator';
import { ChangePassword } from '../../models/ChangePassword.model';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  minPw = 8;
  loading = false;
  hide=true;
  email: string | null = null;
  roleId: string | null = null;
  callfrom:string|null=null;
  changepassword: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private authService: AuthService,
    private router: Router,
    private route:ActivatedRoute,
    private SpinnerService: NgxSpinnerService,
    private _snackBar: MatSnackBar
  ) {
    this.email=localStorage.getItem("EMAIL");
    this.roleId = localStorage.getItem("ROLEID");
    this.callfrom=this.route.snapshot.paramMap.get('callfrom');
    this.SpinnerService.hide();
  }

  ngOnInit(): void {
    this.changepassword = this.formBuilder.group({
      oldpassword: new FormControl('', [Validators?.required,Validators.minLength(this.minPw),Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}")]),
      password: new FormControl('', [Validators?.required,Validators.minLength(this.minPw),Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}")]),
      confirmpassword: new FormControl('', [Validators?.required])
    },
    { validator: passwordMatchValidator });
  }
  get f() {
    return this.changepassword.controls;
  }
  get password() {
    return this.changepassword.get('password');
  }
  get confirmpassword() {
    return this.changepassword.get('confirmpassword');
  }
  /* Called on each input in either password field */
  onPasswordInput() {
    if (this.changepassword.hasError('passwordMismatch'))
      this.confirmpassword?.setErrors([{ passwordMismatch: true }]);
    else this.confirmpassword?.setErrors(null);
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      // horizontalPosition: 'right',
      // verticalPosition: 'top',
      duration: 2000,
    });
  }
  OnChangePassword() {
    this.SpinnerService.show();
    this.loading = true;
    if (this.changepassword.invalid) {
      this.alertService.success("The form contains one or more missing values!", true);
      this.SpinnerService.hide();
    return;
  }
    let obj= new ChangePassword(this.email,this.changepassword.value.oldpassword,this.changepassword.value.password)
    this.authService
      .changepassword(obj)
      .subscribe((data: any) => {
       console.log(data);
       this.SpinnerService.hide();
        if (data.isSuccess) {
            this.alertService.error(data.message);
            this.router.navigate(['signin']);
            this.openSnackBar('Password Changed Successfully');

            }
        else {
          this.alertService.error(data.message);
          this.openSnackBar('Password Changed Successfully');
                   
        }
      });
  }

  OnCancel()
  {
    if(this.callfrom=='login')
      {
        this.router.navigate(['login/userlogin']);
      } 
      if(this.callfrom=='admin')
      {
        this.router.navigate(['admin/dashboard/userlist']);
      } 
      if(this.callfrom=='user')
      {
        this.router.navigate(['hospitalusers/inbox']);
      } 
      if(this.callfrom=='patient')
      {
        this.router.navigate(['/patient/Patient-Dashboard/inbox']);
      } 

    }

}
