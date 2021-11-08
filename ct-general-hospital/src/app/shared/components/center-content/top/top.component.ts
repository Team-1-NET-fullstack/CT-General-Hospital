import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserLogin } from 'src/app/shared/models/UserLogin.model';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  user: UserLogin | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
    this.authService.currentUser.subscribe((user) => {
      this.user = user;
    });
  }

  }
