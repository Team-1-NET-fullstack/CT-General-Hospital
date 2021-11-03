import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public userInfo = new BehaviorSubject<User | null>(null);

  constructor() {
    this.userInfo.subscribe((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }
    });

    if (localStorage.getItem('user')) {
      const str: string | null = localStorage.getItem('user');

      const user: User = JSON.parse(str === null ? '{}' : str);

      this.userInfo.next(user);
    }
  }

  // Array of users
  listOfUsers: User[] = [
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
  login(user: User): boolean {
    // API call here
    
    const foundUser: User | undefined = this.listOfUsers.find(
      (ob) =>
        ob.userName === user.userName &&
        ob.password === user.password &&
        ob.roleId === user.roleId
    );

    if (foundUser) {
      this.userInfo.next(user); // Send alert
      return true;
    } else {
      return false;
    }
  }

  // signup
  signup(user: User) {
    const foundUser: User | undefined = this.listOfUsers.find(
      (ob) => ob.userName === user.userName
    );

    if (foundUser) {
      return false;
    } else {
      this.listOfUsers.push(user);
      this.userInfo.next(user); // Send alert
      return true;
    }
  }

  logout() {
    this.userInfo.next(null); // Send alert
    localStorage.removeItem('user');
  }
}
