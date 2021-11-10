import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { AppointmentSchedulerService } from 'src/app/core/services/appointment-scheduler.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent implements OnInit {
  user: User | null = null;
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  appointmentsCount!: number;
  constructor(
    private authService: AuthService,
    private appointmentSchedulerService: AppointmentSchedulerService
  ) {}

  ngOnInit(): void {
    this.appointmentSchedulerService.getAllAppointments().subscribe((res) => {
      this.appointmentsCount = res.length;
    });
    this.authService.user.subscribe((user) => {
      this.user = user;
    });
  }
}
