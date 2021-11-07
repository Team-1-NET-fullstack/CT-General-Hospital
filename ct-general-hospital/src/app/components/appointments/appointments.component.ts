import { Component, ViewEncapsulation, ViewChild, NgZone } from '@angular/core';
import { L10n, extend, isNullOrUndefined } from '@syncfusion/ej2-base';
import {
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  EventSettingsModel,
  EventRenderedArgs,
  ScheduleComponent,
  ResizeService,
  DragAndDropService,
  ActionEventArgs,
  TimelineMonthService,
  MonthAgendaService,
  TimelineViewsService,
} from '@syncfusion/ej2-angular-schedule';

import { ChangeEventArgs } from '@syncfusion/ej2-calendars';
import { Appointments } from 'src/app/shared/models/appointments.model';
import { AppointmentSchedulerService } from 'src/app/core/services/appointment-scheduler.service';

import { User } from 'src/app/shared/models/user.model';
// import { AuthenticateService, UserService } from 'src/app/services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/core/services/user/user.service';
// import { Status } from 'src/app/Enums/status';
// import { CommonService } from 'src/app/services/common.service';
// import { Appointment, AppointmentInfo, PhysicianDetailList } from 'src/app/models/appointment';

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
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
    TimelineViewsService,
    TimelineMonthService,
    ResizeService,
    DragAndDropService,
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent {
  appointment: Appointments | undefined;

  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent | undefined;
  // currentUser: User;
  // physicianList: Array<PhysicianDetailList> = [];
  appointmentList: any = [];
  appointmentEdit: boolean = true;
  appointmentAdd: boolean = true;
  appointmentDelete: boolean = true;

  public temp: string =
    '<div class="tooltip-wrap">' +
    '<div class="content-area">Title&nbsp;:&nbsp;${Subject}</></div>' +
    '<div class="content-area">Physician&nbsp;:&nbsp;${PhysicianName}</></div>' +
    '${if(City !== null && City !== undefined)}<div class="city">${City}</div>${/if}' +
    '<div class="time">From&nbsp;:&nbsp;${StartTime.toLocaleTimeString()} </div>' +
    '<div class="time">To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;${EndTime.toLocaleTimeString()} </div>' +
    '<div class="content-area">Reason&nbsp;:&nbsp;${Description}</></div>' +
    '</div></div>';

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
    tooltipTemplate: this.temp,
    allowEditing: this.appointmentEdit,
    allowDeleting: this.appointmentDelete,
  };
  public selectedDate: Date = new Date();
  public showQuickInfo: boolean = false;
  public physicianFields: Object = { text: 'PhysicianText', value: 'Id' };

  constructor(
    private appointmentService: AppointmentSchedulerService,
    private userService: UserService,
    private auth: AppointmentSchedulerService,
    private snackBar: MatSnackBar,
    private zone: NgZone
  ) // private commonService: CommonService
  {
    // this.createAppointment();
    // this.currentUser = this.auth.currentUser.result;
    // this.commonService.currentRoute = 'appointment';
  }

  ngOnInit(): void {
    // this.getPhysicians();
    this.getAllAppointments();
    // if (this.currentUser.roleId == 2 || this.currentUser.roleId == 3) {
    //   this.eventSettings.allowAdding = false;
    //   this.eventSettings.allowEditing = false;
    //   this.eventSettings.allowDeleting = false;
    // }
  }

  // private getPhysicians() {
  //   this.userService.getAllUsers('Physician').subscribe((result) => {
  //     result.forEach((physicianObj) => {
  //       this.physicianList.push({
  //         Id: physicianObj.userId,
  //         PhysicianText: physicianObj.firstName + ' ' + physicianObj.lastName,
  //       });
  //     });
  //   });
  // }

  public getAllAppointments(): any {
    this.zone.run(() => {
      this.appointmentService
        .getAllAppointments()
        .subscribe((res: Appointments[]) => {
          const list: any[] = [];
          res.forEach((element: Appointments) => {
            var appointment = {
              Id: element.AppointmentId,
              Subject: element.Reason,
              Description: element.Reason,
              Physician: element.PhysicianId,
              StartTime: element.TimeSlot,
              EndTime: element.TimeSlot,
              Status: element.Status,
              PhysicianName: element.PhysicianName, // this.searchPhysician(element.PhysicianId),
            };
            this.appointmentList.push(appointment);
          });
          console.log(this.appointmentList);
        });
    });
  }

  // public searchPhysician(physicianId: number) {
  //   var physicianName = '';
  //   if (this.physicianList != null) {
  //     physicianName = this.physicianList.find(
  //       (x) => x.Id == physicianId
  //     ).PhysicianText;
  //   }
  //   return physicianName;
  // }

  public dateParser(data: string) {
    return new Date(data);
  }

  public onCellDoubleClick(event: any) {
    var startDate = new Date(event.startTime);
    // this.physicianList = [];
    // this.getPhysiciansByAvailability(startDate);
    console.log(event);
  }

  // public getPhysiciansByAvailability(startDate: Date) {
  //   this.appointmentService
  //     .GetAllAvailablePhysicians(startDate)
  //     .subscribe((result) => {
  //       result.forEach((physicianObj) => {
  //         this.physicianList.push({
  //           Id: physicianObj.id,
  //           PhysicianText: physicianObj.physicianName,
  //         });
  //       });
  //     });
  // }

  public onEventRendered(args: EventRenderedArgs): void {
    switch (args.data.Status) {
      case false:
        (args.element as HTMLElement).style.backgroundColor = '#ff0000';
        break;
      case true:
        (args.element as HTMLElement).style.backgroundColor = '#00ff00';
        break;
      case 'Pending':
        (args.element as HTMLElement).style.backgroundColor = '#3f51b5';
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
        var appointmentInfo: Appointments = {
          PatientId: 3,
          PhysicianId: 5,
          Reason: data.Subject,
          TimeSlot: 5,
          Duration: 30,
          Status: false,
          IsActive: false,
          CreatedBy: 3,
          CreatedDate: new Date(),
          UpdatedBy: 7,
          SlotDate: data.StartTime,
          UpdatedDate: new Date(),
          // patientId: this.currentUser.userId,
          // physicianId: data.Physician,
          // title: data.Subject,
          // startTime: data.StartTime,
          // endTime: data.EndTime,
          // status: Status[Status.Pending],
          // reason: data.Description,
          // patientName: null,
          // id: 0,
          // date: null,
          // time: null,
          // physicianName: data.Physician,
        };
        console.log(appointmentInfo);
        //console.log(this.physicianList);
        this.appointmentService.createAppointment(appointmentInfo);
        // .subscribe((response: any) => {
        //   if (response.isSuccess) {
        //     this.getAllAppointments();
        //     this.snackBar.open('Appointment Added successfully', 'X', {
        //       horizontalPosition: 'right',
        //       verticalPosition: 'top',
        //       duration: 5000,
        //       panelClass: ['mat-toolbar', 'custom-snackbar'],
        //     });
        //   } else {
        //     this.snackBar.open('failed', 'X', {
        //       horizontalPosition: 'right',
        //       verticalPosition: 'top',
        //       duration: 5000,
        //       panelClass: ['mat-toolbar', 'error-snackbar'],
        //     });
        //   }
        // });
        // } else if (args.requestType === 'eventRemove') {
        //   var data = args.data[0];
        //   this.appointmentService
        //     .deleteAppointment(data.Id)
        //     .subscribe((response: any) => {
        //       if (response.isSuccess) {
        //         this.snackBar.open('Appointment deleted successfully', 'X', {
        //           horizontalPosition: 'right',
        //           verticalPosition: 'top',
        //           duration: 5000,
        //           panelClass: ['mat-toolbar', 'custom-snackbar'],
        //         });
        //       } else {
        //         this.snackBar.open('failed', 'X', {
        //           horizontalPosition: 'right',
        //           verticalPosition: 'top',
        //           duration: 5000,
        //           panelClass: ['mat-toolbar', 'error-snackbar'],
        //         });
        //       }
        //     });
      } else if (args.requestType === 'eventChange') {
        var updateData = args.changedRecords[0];
        var appointmentInformation: Appointments = {
          AppointmentId: 37,
          PatientId: 0,
          PhysicianId: 0,
          Reason: 'string',
          TimeSlot: 0,
          Duration: 0,
          Status: true,
          IsActive: true,
          CreatedBy: 0,
          CreatedDate: new Date(),
          UpdatedBy: 0,
          UpdatedDate: new Date(),
          SlotDate: new Date(),

          // PatientId: 3, // patientId: this.currentUser.userId,
          // PhysicianId: 5, // physicianId: 0,
          // Reason: updateData.Subject,
          // TimeSlot: updateData.StartTime,
          // Duration: 30,
          // Status: false,
          // IsActive: false,
          // CreatedBy: 3,
          // CreatedDate: new Date(),
          // UpdatedBy: 7,
          // SlotDate: new Date(),
          // UpdatedDate: new Date(),
        };
        this.appointmentService.updateAppointment(appointmentInformation);
        // .subscribe((response: any) => {
        //   if (response.isSuccess) {
        //     this.snackBar.open('Appointment Updated successfully', 'X', {
        //       horizontalPosition: 'right',
        //       verticalPosition: 'top',
        //       duration: 5000,
        //       panelClass: ['mat-toolbar', 'custom-snackbar'],
        //     });
        //   } else {
        //     this.snackBar.open('Somehing went wrong', 'X', {
        //       horizontalPosition: 'right',
        //       verticalPosition: 'top',
        //       duration: 5000,
        //       panelClass: ['mat-toolbar', 'error-snackbar'],
        //     });
        //   }
        // });
      }
      // if (!this.scheduleObj.isSlotAvailable(data.StartTime as Date, data.EndTime as Date)) {
      //   args.cancel = true;
      // }
    }
  }

  createAppointment() {
    // this.appointment = new Appointments(
    //   3,
    //   6,
    //   'Appointment',
    //   4,
    //   20,
    //   false,
    //   false,
    //   3,
    //   new Date(),
    //   1,
    //   new Date(),
    //   new Date()
    // );

    this.appointmentService.createAppointment(this.appointment);
  }
}
