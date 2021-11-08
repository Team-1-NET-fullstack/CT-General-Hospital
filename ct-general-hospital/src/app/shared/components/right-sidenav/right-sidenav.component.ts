import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from '../../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { FAQsComponent } from '../faqs/faqs.component';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';
import { UserLogin } from '../../models/UserLogin.model';

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.css'],
})
export class RightSidenavComponent implements OnInit {

  user: UserLogin | null = null;

    constructor(private authService: AuthService,public dialog: MatDialog) {}
  
    TnCClick() {
      const dialogRef = this.dialog.open(TermsConditionsComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        // console.log(`Dialog result: ${result}`);
      });
    }
    FAQClick() {
      const dialogRef = this.dialog.open(FAQsComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        // console.log(`Dialog result: ${result}`);
      });
    }

  ngOnInit(): void {
    this.authService.currentUser.subscribe((user) => {
      this.user = user;
    });
  }
}
