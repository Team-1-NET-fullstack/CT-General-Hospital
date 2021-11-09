import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  email: any | null = null;
  roleId: any | null = null;
  employeeId: any | null = null;
  UserId: any | null = null;
  constructor(private router: Router,
    private authService: AuthService,) {
    this.email = localStorage.getItem("EMAIL");
    this.roleId = localStorage.getItem("ROLEID");
    this.employeeId = localStorage.getItem("EMPLOYEEID");
    this.UserId = localStorage.getItem("USERID");
    console.log(this.roleId);
  }
  ngOnInit(): void {
    
    // this.authService.userInfo.subscribe((user) => {
    //   this.user = user;
    //});
  }

  }
