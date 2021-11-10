import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public user = new BehaviorSubject<User | null>(null);
  // listOfUsers: Array<User> = [];
  // listOfUsers: User[] = [];
  constructor(private http: HttpClient) {
    this.getUsersForLogin();

    this.user.subscribe((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }
    });

    if (localStorage.getItem('user')) {
      const str: string | null = localStorage.getItem('user');

      const user: User = JSON.parse(str === null ? '{}' : str);

      this.user.next(user);
    }
  }

  // Array of users
  listOfUsers: User[] = [
    {
      userId: 1,
      email: 'admin@ct.com',
      password: 'test',
      roleId: 1,
    },
    {
      userId: 2,
      email: 'doctor@ct.com',
      password: 'test',
      roleId: 2,
    },
    {
      userId: 3,
      email: 'nurse@ct.com',
      password: 'test',
      roleId: 3,
    },
    {
      userId: 4,
      email: 'patient@ct.com',
      password: 'test',
      roleId: 4,
    },
  ];

  private getUsersForLogin() {
    this.getAllUsersForLogin().subscribe((result) => {
      console.log(result);
      result.forEach((userObj) => {
        this.listOfUsers.push({
          userId: userObj.userId,
          email: userObj.email,
          password: userObj.password,
          roleId: userObj.roleId,
          UserText: userObj.firstName + ' ' + userObj.lastName,
        });
      });
    });
  }

  // login
  login(user: User): boolean {
    // API call here
    this.getUsersForLogin();
    const foundUser: User | undefined = this.listOfUsers.find(
      (ob) => ob.email === user.email && ob.password === user.password
    );

    if (foundUser) {
      this.user.next(user); // Send alert
      return true;
    } else {
      return false;
    }
  }

  // signup
  signup(user: User) {
    const foundUser: User | undefined = this.listOfUsers.find(
      (ob) => ob.email === user.email
    );

    if (foundUser) {
      return false;
    } else {
      this.listOfUsers.push(user);
      this.user.next(user); // Send alert
      return true;
    }
  }

  logout() {
    this.user.next(null); // Send alert
    localStorage.removeItem('user');
  }

  public getAllUsersForLogin(): Observable<User[]> {
    return this.http.get<User[]>(
      `${environment.masterApiBaseUrl}GetAllTheUsersForLogin`
    );
  }
}
