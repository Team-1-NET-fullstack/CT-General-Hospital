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
  constructor() {}

  ngOnInit(): void {}
}
