import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from '../../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { FAQsComponent } from '../faqs/faqs.component';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.css'],
})
export class RightSidenavComponent implements OnInit {

  email: any | null = null;
  roleId: any | null = null;
  employeeId: any | null = null;
  UserId: any | null = null;
  constructor(private router: Router, private dialog: MatDialog,
    private authService: AuthService,) {
    this.email = localStorage.getItem("EMAIL");
    this.roleId = localStorage.getItem("ROLEID");
    this.employeeId = localStorage.getItem("EMPLOYEEID");
    this.UserId = localStorage.getItem("USERID");
    }
  
    TnCClick() {
      const dialogRef = this.dialog.open(TermsConditionsComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
    FAQClick() {
      const dialogRef = this.dialog.open(FAQsComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

  ngOnInit(): void {
    // this.authService.userInfo.subscribe((user) => {
    //   this.user = user;
   // });
  }
}
