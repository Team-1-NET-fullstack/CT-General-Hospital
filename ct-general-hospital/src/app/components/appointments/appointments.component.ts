import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { extend, isNullOrUndefined } from '@syncfusion/ej2-base';
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

  constructor(private appointmentService: AppointmentSchedulerService) {
    // this.createAppointment();
  }

  ngOnInit(): void {}

  createAppointment() {
    this.appointment = new Appointments(
      3,
      6,
      'Appointment',
      4,
      20,
      false,
      false,
      3,
      new Date(),
      1,
      new Date(),
      new Date()
    );

    this.appointmentService.createAppointment(this.appointment);
  }
}
