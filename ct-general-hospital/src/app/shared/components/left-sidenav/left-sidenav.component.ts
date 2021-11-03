import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from '../../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { MyAccountComponent } from '../my-account/my-account.component';
import { MasterComponent } from 'src/app/components/admin/master/master.component';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.css'],
})
export class LeftSidenavComponent implements OnInit {
  user: User | null = null;


  constructor(private authService: AuthService, private router: Router,public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(MyAccountComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
  openMasterDialog(){
    const dialogRef = this.dialog.open(MasterComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.authService.userInfo.subscribe((user) => {
      this.user = user;
    });
}
onLogout() {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }
}
