import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Appointments } from 'src/app/shared/models/appointments.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentSchedulerService {
  appointments: Appointments[] = [];

  constructor(private http: HttpClient) {}

  getAllAppointments() {
    this.http
      .get<Appointments[]>(
        `${environment.appointmentSchedulerApiBaseUrl}GetAllAppointments`
      )
      .subscribe((appointments) => {
        // console.log(appointments);
        this.appointments.splice(0, this.appointments.length); // Clear array
        this.appointments.push(...appointments); // add new element
        // console.log(this.appointments);
      });

    return this.appointments;

    // return this.http.get(
    //   environment.appointmentSchedulerApiBaseUrl + 'GetAllAppointments'
    // );
  }

  createAppointment(newAppointment: any) {
    this.http
      .post(
        `${environment.appointmentSchedulerApiBaseUrl}CreateAppointment`,
        newAppointment
      )
      .subscribe((res) => {
        console.log(res);
        console.log('data inserted successfully');
      });
  }
}
