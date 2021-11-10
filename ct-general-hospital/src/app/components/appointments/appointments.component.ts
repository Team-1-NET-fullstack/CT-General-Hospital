import { Component, NgZone, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  EventSettingsModel,
  ResizeService,
  DragAndDropService,
  ScheduleComponent,
  EventRenderedArgs,
  AgendaService,
  TimelineMonthService,
  MonthAgendaService,
  TimelineViewsService,
} from '@syncfusion/ej2-angular-schedule';
import {
  Appointment,
  PhysicianDetailList,
} from 'src/app/shared/models/appointment.model';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { AppointmentSchedulerService } from 'src/app/core/services/appointment-scheduler.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { L10n } from '@syncfusion/ej2-base';
import { Status } from 'src/app/shared/enums/status.enum';

L10n.load({
  'en-US': {
    schedule: {
      saveButton: 'Save',
      cancelButton: 'Close',
      deleteButton: 'Delete',
      newEvent: 'Add Appointment',
      editEvent: 'Update Appointment',
    },
  },
});

/**
 * Schedule editor template sample
 */

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    ResizeService,
    DragAndDropService,
    AgendaService,
    MonthAgendaService,
    TimelineViewsService,
    TimelineMonthService,
  ],
  styleUrls: ['./appointments.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppointmentsComponent {
  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent | undefined;
  user!: User;
  physicianList: Array<PhysicianDetailList> = [];
  appointmentList: any = [];
  appointmentEdit: boolean = true;
  appointmentAdd: boolean = true;
  appointmentDelete: boolean = true;

  public eventSettings: EventSettingsModel = {
    dataSource: this.appointmentList,
    fields: {
      id: 'Id',
      subject: { name: 'Subject', validation: { required: true } },
      description: { name: 'Description', validation: { required: true } },
      startTime: { name: 'StartTime', validation: { required: true } },
      endTime: { name: 'EndTime', validation: { required: true } },
    },
    allowAdding: this.appointmentAdd,
    enableTooltip: true,
    allowEditing: this.appointmentEdit,
    allowDeleting: this.appointmentDelete,
  };
  public selectedDate: Date = new Date();
  public showQuickInfo: boolean = false;
  public physicianFields: Object = {
    text: 'PhysicianText',
    value: 'PhysicianId',
  };

  constructor(
    private appointmentService: AppointmentSchedulerService,
    private userService: UserService,
    private auth: AuthService,
    private snackBar: MatSnackBar,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    this.getPhysicians();
    this.getAllAppointments();
    if (
      this.auth.user.value?.roleId == 1 ||
      this.auth.user.value?.roleId == 4
    ) {
      this.eventSettings.allowAdding = false;
      this.eventSettings.allowEditing = false;
      this.eventSettings.allowDeleting = false;
    }
    if (this.auth.user.value?.roleId == 4) {
      this.eventSettings.allowAdding = true;
    }
  }

  private getPhysicians() {
    this.userService.getAllUsers('2').subscribe((result) => {
      result.forEach((physicianObj) => {
        this.physicianList.push({
          PhysicianId: physicianObj.userId,
          PhysicianText: physicianObj.firstName + ' ' + physicianObj.lastName,
        });
      });
    });
  }

  public getAllAppointments(): any {
    this.zone.run(() => {
      this.appointmentService
        .getAllAppointments()
        .subscribe((res: Appointment[]) => {
          const list: any[] = [];
          res.forEach((element: Appointment) => {
            var appointment = {
              Id: element.appointmentId,
              Subject: element.title,
              Description: element.reason,
              Physician: element.physicianId,
              StartTime: element.startTime,
              EndTime: element.endTime,
              Status: element.status,
              PhysicianName: element.physicianName, // this.searchPhysician(element.PhysicianId),
            };
            this.appointmentList.push(appointment);
          });
        });
    });
  }

  public dateParser(data: string) {
    return new Date(data);
  }

  public onCellDoubleClick(event: any) {
    var startDate = new Date(event.startTime);
    this.physicianList = [];
    this.getPhysiciansByAvailability(startDate);
    console.log(event);
  }

  public getPhysiciansByAvailability(startDate: Date) {
    this.appointmentService
      .GetAllAvailablePhysicians(startDate)
      .subscribe((result) => {
        result.forEach((physicianObj) => {
          this.physicianList.push({
            PhysicianId: physicianObj.physicianId,
            PhysicianText: physicianObj.physicianName,
          });
        });
      });
  }

  public onEventRendered(args: EventRenderedArgs): void {
    switch (args.data.Status) {
      case 'Declined':
        (args.element as HTMLElement).style.backgroundColor = '#ff0000';
        break;
      case 'Active':
        (args.element as HTMLElement).style.backgroundColor = '#00ff00';
        break;
      case 'Pending':
        (args.element as HTMLElement).style.backgroundColor = '#3f51b5';
        break;
      default:
        (args.element as HTMLElement).style.backgroundColor = '#333333';
        break;
    }
  }

  public onActionBegin(args: any): void {
    if (
      args.requestType === 'eventCreate' ||
      args.requestType === 'eventChange' ||
      args.requestType === 'eventRemove'
    ) {
      if (args.requestType === 'eventCreate') {
        var data = args.data[0];
        var appointmentInfo: Appointment = {
          patientId: this.auth.user.value?.userId, // this.user.userId,
          physicianId: data.Physician,
          title: data.Subject,
          startTime: data.StartTime,
          endTime: data.EndTime,
          status: Status[Status.Pending],
          reason: data.Description,
          isActive: true,
          createdBy: this.auth.user.value?.userId, // this.user.userId,
          modifiedBy: this.auth.user.value?.userId, // this.user.userId,
          physicianName: data.Physician,
        };
        console.log(appointmentInfo);
        console.log(this.physicianList);
        this.appointmentService
          .createAppointment(appointmentInfo)
          .subscribe((response: any) => {
            if (response) {
              this.getAllAppointments();
              this.snackBar.open('Appointment Added successfully', 'X', {
                duration: 2000,
              });
            } else {
              this.snackBar.open('failed', 'X', {
                duration: 2000,
              });
            }
          });
      } else if (args.requestType === 'eventRemove') {
        var data = args.data[0];
        this.appointmentService
          .deleteAppointment(data.Id)
          .subscribe((response: any) => {
            if (response) {
              this.snackBar.open('Appointment deleted successfully', 'X', {
                duration: 2000,
              });
            } else {
              this.snackBar.open('failed', 'X', {
                duration: 2000,
              });
            }
          });
      } else if (args.requestType === 'eventChange') {
        var updateData = args.changedRecords[0];
        var appointmentInformation: Appointment = {
          appointmentId: updateData.Id,
          title: updateData.Subject,
          // startTime: updateData.StartTime,
          // endTime: updateData.EndTime,
          status: Status[Status.Pending],
          reason: updateData.Description,
        };
        this.appointmentService
          .updateAppointment(appointmentInformation)
          .subscribe((response: any) => {
            if (response) {
              this.snackBar.open('Appointment Updated successfully', 'X', {
                duration: 2000,
              });
            } else {
              this.snackBar.open('Somehing went wrong', 'X', {
                duration: 2000,
              });
            }
          });
      }
    }
  }
}
