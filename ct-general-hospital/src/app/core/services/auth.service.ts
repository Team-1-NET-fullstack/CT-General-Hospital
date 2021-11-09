import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ChangePassword } from 'src/app/shared/models/ChangePassword.model';
import { Login } from 'src/app/shared/models/login.model';
import { UserModel } from 'src/app/shared/models/UserModel.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  userUpdated = new BehaviorSubject<string | null>(null);
  roleUpdated = new BehaviorSubject<string | null>(null);
  userIdUpdated = new BehaviorSubject<string | null>(null);
  employeeIdUpdated = new BehaviorSubject<string | null>(null);
  firstNameUpdated = new BehaviorSubject<string | null>(null);
  id: number = 0;
  public userInfo = new BehaviorSubject<UserModel | null>(null);
  constructor(private router: Router, private http: HttpClient) {
    this.userUpdated.next(localStorage.getItem('EMAILID'));
     this.roleUpdated.next(localStorage.getItem('ROLEID'));
      this.firstNameUpdated.next(localStorage.getItem('FIRSTNAME'));
    console.log(this.roleUpdated);
    this.userIdUpdated.next(localStorage.getItem('USERID'));
    this.employeeIdUpdated.next(localStorage.getItem('EMPLOYEEID'));
    this.userInfo.subscribe((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }
    });

    if (localStorage.getItem('user')) {
      const str: string | null = localStorage.getItem('user');

      const user: UserModel = JSON.parse(str === null ? '{}' : str);

      this.userInfo.next(user);
    }
  }
  //login
  login(login: Login) {
    console.log(environment.jwtApiBaseUrl);
    console.log(login.email);
    console.log(login.password);

  //  var abc= this.http.post(environment.jwtApiBaseUrl + '/api/Authenticate/Login', {emailId:login.email,password:login.password});
  //    console.log("Response from API:"+abc);
     //return abc;
    return this.http.post(environment.jwtApiBaseUrl + '/api/Authenticate/Login', {emailId:login.email,password:login.password});
  }

  forgotPassword(email: string) {
    console.log(email);
    let obj = { email: email };
    return this.http.post(
      environment.userManagementApiBaseUrl + '/api/User/ForgotPassword',
      obj
    );
  }
  //change password
  changepassword(changepassword: ChangePassword) {
    console.log(environment.userManagementApiBaseUrl);
    console.log(changepassword.email);
    console.log(changepassword.password);
    console.log(changepassword.oldpassword);
    return this.http.post(
      
      environment.userManagementApiBaseUrl + '/api/User/ChangePassword',
      changepassword
    );
  }
  // //signup
  // signup(email: string, password: string) {
  //   const success = true;
  //   if (success) {
  //     //localStorage.setItem("JWT", "KJSKDHASDA");
  //     localStorage.setItem('EMAIL', email);
  //     alert('Signup successfull');
  //   } else {
  //     alert('Signup failed');
  //     localStorage.clear();
  //   }
  // }
  //signout
  logout() {
    localStorage.clear();
    this.userUpdated.next(null);
     this.roleUpdated.next(null);
    this.router.navigate(['signin']);
    localStorage.removeItem('userUpdated');
    
    
  }
  //Get all roles
  getAllRoles() {
    //const success=true;
    return this.http.get(environment.userManagementApiBaseUrl + '/api/User/GetAllRoles');
  }
  getRolesById(user: UserModel) {
    //const success=true;
    return this.http.get(environment.userManagementApiBaseUrl + '/api/User/GetRolesById');
  }
  getRolesByEmail() {
    let email;
    this.userUpdated.subscribe((user: any) => {
      email = user;
    });
    return this.http.get(
      environment.userManagementApiBaseUrl + `/api/User/GetRolesByEmail/${email}`
    );
  }
}
