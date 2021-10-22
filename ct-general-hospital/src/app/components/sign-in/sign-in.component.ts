import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  form: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);

      this.router.navigate(['/patient/dashboard']);
    }
  }

  onLogin() {
    console.log(this.form);

    // gather data from form
    const userName: string = this.form.value.userName;
    const password: string = this.form.value.password;
    if (userName.includes('admin')) {
    }
    const roleId: number = userName.includes('admin')
      ? 1
      : userName.includes('doctor')
      ? 2
      : userName.includes('nurse')
      ? 3
      : 4;

    // Creating object
    const ob: User = {
      userName: userName,
      password: password,
      roleId: roleId,
    };

    // pass to auth service for login verfication
    if (this.authService.login(ob)) {
      console.log(ob);
      this.router.navigate(['/patient/dashboard']);
    } else {
      console.log(ob);
      alert('Login failed');
    }
  }

  @Input()
  error!: string | null;

  @Output() submitEM = new EventEmitter();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
}
