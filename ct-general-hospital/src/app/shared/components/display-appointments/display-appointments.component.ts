import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-appointments',
  templateUrl: './display-appointments.component.html',
  styleUrls: ['./display-appointments.component.css'],
})
export class DisplayAppointmentsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:9032/api/Appointments/GetAllAppointments')
      .subscribe((appointments) => {
        console.log(appointments);
      });
  }
}
