import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/User.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { AppointmentSchedulerService } from 'src/app/core/services/appointment-scheduler.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent implements OnInit {
  user: User | null = null;
  appointmentsCount!: number;
  constructor(
    private authService: AuthService,
    private appointmentSchedulerService: AppointmentSchedulerService
  ) {}

  ngOnInit(): void {
    this.appointmentSchedulerService.getAllAppointments().subscribe((res) => {
      this.appointmentsCount = res.length;
    });
    this.authService.currentUser.subscribe((user) => {
      this.user = user;
    });
  }
}
