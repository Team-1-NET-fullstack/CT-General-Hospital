import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);

      this.router.navigate(['/patient/dashboard']);
    }
  }

  onLogin() {
    // console.log(this.form);

    // gather data from form
    const email: string = this.form.value.email;
    const password: string = this.form.value.password;
    if (email.includes('admin')) {
    }
    const roleId: number = email.includes('admin')
      ? 1
      : email.includes('doctor')
      ? 2
      : email.includes('nurse')
      ? 3
      : 4;

    // Creating object
    const ob: User = {
      email: email,
      password: password,
      roleId: roleId,
    };

    // pass to auth service for login verfication
    if (this.authService.login(ob)) {
      this.openSnackBar('Login Successful!');
      switch (roleId) {
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
    } else {
      // console.log(ob);
      this.openSnackBar('Login Failed!');
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      // horizontalPosition: 'right',
      // verticalPosition: 'top',
      duration: 2000,
    });
  }

  @Input()
  error!: string | null;

  @Output() submitEM = new EventEmitter();

  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
}
