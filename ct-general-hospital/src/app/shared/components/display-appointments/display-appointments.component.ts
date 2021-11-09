import { Component, OnInit, ViewChild } from '@angular/core';
import { Appointment } from '../../models/appointment.model';
import { AppointmentSchedulerService } from 'src/app/core/services/appointment-scheduler.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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

  // appointments: Appointment[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  dataSource: MatTableDataSource<Appointment>;

  displayedColumns: string[] = [
    'title',
    'patientName',
    'physicianName',
    'endTime',
    'startTime',
    'status',
  ];

  constructor(
    private appointmentService: AppointmentSchedulerService,
    private spinner: NgxSpinnerService
  ) {
    this.dataSource = new MatTableDataSource();
    this.getAllAppointments();
  }

  ngOnInit(): void {}

  getAllAppointments() {
    // this.spinner.show();

    this.appointmentService.getAllAppointments().subscribe((res) => {
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;

      // this.appointments.splice(0, this.appointments.length); //clear array
      // this.appointments.push(...res); //add new element
    });

    // this.spinner.hide();
  }
}
