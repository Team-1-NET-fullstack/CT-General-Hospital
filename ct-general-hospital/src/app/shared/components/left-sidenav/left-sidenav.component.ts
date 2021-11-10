import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MyAccountComponent } from '../my-account/my-account.component';
import { MasterComponent } from 'src/app/components/admin/master/master.component';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.css'],
})
export class LeftSidenavComponent implements OnInit {
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
    console.log(this.roleId);
  }
  openDialog() {
    const dialogRef = this.dialog.open(MyAccountComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openMasterDialog(){
    const dialogRef = this.dialog.open(MasterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
    
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }
}
