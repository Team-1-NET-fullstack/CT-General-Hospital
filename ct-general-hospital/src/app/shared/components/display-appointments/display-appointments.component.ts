import { Component, OnInit } from '@angular/core';
import { Appointments } from '../../models/appointments.model';
import { AppointmentSchedulerService } from 'src/app/core/services/appointment-scheduler.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-display-appointments',
  templateUrl: './display-appointments.component.html',
  styleUrls: ['./display-appointments.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class DisplayAppointmentsComponent implements OnInit {
  employees = [
    { id: 1, name: 'Aditya' },
    { id: 2, name: 'Aparna' },
    { id: 3, name: 'Bhavya' },
    { id: 4, name: 'Praveen' },
  ];

  appointments: Appointments[] = [];

  constructor(
    private appointmentService: AppointmentSchedulerService,
    private spinner: NgxSpinnerService
  ) {
    this.getAllAppointments();
  }

  ngOnInit(): void {}

  getAllAppointments() {
    this.spinner.show();
    this.appointments = this.appointmentService.getAllAppointments();
    this.spinner.hide();
  }
}
