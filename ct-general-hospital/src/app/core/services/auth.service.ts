import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { UserLogin } from 'src/app/shared/models/UserLogin.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public currentUser = new BehaviorSubject<UserLogin | null>(null);

  constructor() {
    this.currentUser.subscribe((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }
    });

    if (localStorage.getItem('user')) {
      const str: string | null = localStorage.getItem('user');

      const user: UserLogin = JSON.parse(str === null ? '{}' : str);

      this.currentUser.next(user);
    }
  }

  // Array of users
  listOfUsers: UserLogin[] = [
    {
      userName: 'admin@ct.com',
      password: 'test',
      roleId: 1,
    },
    {
      userName: 'doctor@ct.com',
      password: 'test',
      roleId: 2,
    },
    {
      userName: 'nurse@ct.com',
      password: 'test',
      roleId: 3,
    },
    {
      userName: 'patient@ct.com',
      password: 'test',
      roleId: 4,
    },
  ];

  // login
  login(user: UserLogin): boolean {
    // API call here

    const foundUser: UserLogin | undefined = this.listOfUsers.find(
      (ob) =>
        ob.userName === user.userName &&
        ob.password === user.password &&
        ob.roleId === user.roleId
    );

    if (foundUser) {
      this.currentUser.next(user); // Send alert
      return true;
    } else {
      return false;
    }
  }

  // signup
  signup(user: UserLogin) {
    const foundUser: UserLogin | undefined = this.listOfUsers.find(
      (ob) => ob.userName === user.userName
    );

    if (foundUser) {
      return false;
    } else {
      this.listOfUsers.push(user);
      this.currentUser.next(user); // Send alert
      return true;
    }
  }

  logout() {
    this.currentUser.next(null); // Send alert
    localStorage.removeItem('user');
  }
}
