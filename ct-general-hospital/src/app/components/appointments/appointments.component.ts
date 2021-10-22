import { Component } from '@angular/core';
import {
  EventSettingsModel,
  DayService,
  WeekService,
  TimelineMonthService,
  MonthService,
  AgendaService,
} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-appointments',
  providers: [
    DayService,
    WeekService,
    MonthService,
    AgendaService,
    TimelineMonthService,
  ],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent {
  public data: object[] = [
    {
      Id: 2,
      Subject: 'Paris',
      StartTime: new Date(2021, 1, 15, 10, 0),
      EndTime: new Date(2021, 1, 15, 12, 30),
    },
  ];
  public selectedDate: Date = new Date(2021, 1, 15);
  public eventSettings: EventSettingsModel = {
    dataSource: this.data,
  };
  constructor() {}

  ngOnInit(): void {}
}
