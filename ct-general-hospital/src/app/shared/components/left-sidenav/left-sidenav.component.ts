import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.css'],
})
export class LeftSidenavComponent implements OnInit {
  user: User | null = null;

  constructor(private authService: AuthService, private router: Router) {}
  openAccountDialog(): void {}

  openPasswordDialog() {}
  openFAQDialog() {}
  openTCDialog() {}
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
