import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/models/User.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public currentUser = new BehaviorSubject<User | null>(null);

  constructor() {
    this.currentUser.subscribe((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }
    });

    if (localStorage.getItem('user')) {
      const str: string | null = localStorage.getItem('user');

      const user: User = JSON.parse(str === null ? '{}' : str);

      this.currentUser.next(user);
    }
  }

  // Array of users
  listOfUsers: User[] = [
    {
      email: 'admin@ct.com',
      password: 'test',
      roleId: 1,
    },
    {
      email: 'doctor@ct.com',
      password: 'test',
      roleId: 2,
    },
    {
      email: 'nurse@ct.com',
      password: 'test',
      roleId: 3,
    },
    {
      email: 'patient@ct.com',
      password: 'test',
      roleId: 4,
    },
  ];

  // login
  login(user: User): boolean {
    // API call here

    const foundUser: User | undefined = this.listOfUsers.find(
      (ob) =>
        ob.email === user.email &&
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
  signup(user: User) {
    const foundUser: User | undefined = this.listOfUsers.find(
      (ob) => ob.email === user.email
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
