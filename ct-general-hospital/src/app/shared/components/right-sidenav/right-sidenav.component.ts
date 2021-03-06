import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from '../../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { FAQsComponent } from '../faqs/faqs.component';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.css'],
})
export class RightSidenavComponent implements OnInit {
  user: User | null = null;

  constructor(private authService: AuthService, public dialog: MatDialog) {}

  TnCClick() {
    const dialogRef = this.dialog.open(TermsConditionsComponent);

    dialogRef.afterClosed().subscribe((result) => {});
  }
  FAQClick() {
    const dialogRef = this.dialog.open(FAQsComponent);

    dialogRef.afterClosed().subscribe((result) => {});
  }

  ngOnInit(): void {
    this.authService.user.subscribe((user) => {
      this.user = user;
    });
  }
}
