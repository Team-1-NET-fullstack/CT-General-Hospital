import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Appointment, AppointmentInfo } from '../../models/appointment.model';
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
import { MatSnackBar } from '@angular/material/snack-bar';
import { Status } from '../../enums/status.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/core/mocks/user.mock';

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

  user!: User;
  show: any = true;

  constructor(
    private appointmentService: AppointmentSchedulerService,
    private auth: AuthService,
    private snackBar: MatSnackBar,
    private spinner: NgxSpinnerService,
    private zone: NgZone
  ) {
    this.dataSource = new MatTableDataSource();
    this.getAllAppointments();
    if (this.auth.user.value?.roleId == 4) {
      this.show = false;
      this.displayedColumns = [
        'title',
        'physicianName',
        'endTime',
        'startTime',
      ];
    }
  }

  ngOnInit(): void {}

  getAllAppointments() {
    this.appointmentService.getAllAppointments().subscribe((res) => {
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
    });
  }

  editStatus(element: any, details: any) {
    console.log(details);
    var changedStatus = element.srcElement.innerText;
    var status = changedStatus == 'Accept' ? 'Active' : 'Declined';
    changedStatus =
      changedStatus == 'Accept'
        ? Status[Status.Active]
        : Status[Status.Declined];
    var appointmentInformation: Appointment = {
      appointmentId: details.appointmentId,
      // patientId: this.auth.user.value?.userId,
      // physicianId: 0,
      // startTime: new Date(),
      // endTime: new Date(),
      status: changedStatus,
      reason: details.reason,
      // patientName: '',
      // physicianName: '',
    };
    this.appointmentService
      .UpdateAppointmentStatus(appointmentInformation)
      .subscribe((response: any) => {
        if (response) {
          this.appointmentService.getAllAppointments();
          this.snackBar.open(
            'Appointment' + ' ' + status + ' ' + 'successfully',
            'X',
            {
              duration: 2000,
            }
          );
        } else {
          this.snackBar.open('failed', 'X', {
            duration: 2000,
          });
        }
      });
  }
}
