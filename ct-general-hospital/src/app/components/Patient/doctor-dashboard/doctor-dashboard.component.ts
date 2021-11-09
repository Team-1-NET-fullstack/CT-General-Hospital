import { Component, OnInit, ViewChild } from '@angular/core';
import { Appointment } from 'src/app/shared/models/appointment.model';
import { AppointmentSchedulerService } from 'src/app/core/services/appointment-scheduler.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css'],
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



export class DoctorDashboardComponent implements OnInit {

  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  dataSource: MatTableDataSource<Appointment>;

  displayedColumns: string[] = [
    'appoinmentId',
    'patientName',
    'physicianName',
    'endTime',
    'startTime',
    'status',
  ];

  constructor(
    private appointmentService: AppointmentSchedulerService,
    private spinner: NgxSpinnerService,
    private route: Router
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
  VisitDetails(AppointmentId: number) {
    console.log(this.dataSource.data);
    this.route.navigate(['/nurse/patient-visit/'+2]);
  }

}
